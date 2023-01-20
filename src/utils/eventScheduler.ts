import { nanoid } from "nanoid";

/**
 * 事件类型
 */
interface EventType {
  id: string;
  name: string;
  target_event: string;
  data?: unknown;
}

/**
 * 注册类型
 */
interface RegisterType {
  name: string;
  target_event: string;
  data?: unknown;
}
export class EventScheduler {
  private static instance: EventScheduler;

  private Events!: Map<string, EventType>;

  constructor() {}

  /**
   * 获取实例
   * @returns EventScheduler
   */
  getInstance() {
    if (!EventScheduler.instance) {
      EventScheduler.instance = new EventScheduler();
    }

    return EventScheduler.instance;
  }

  /**
   * 用于事件注册
   * @param params EventType
   * @returns id string
   */
  register(params: RegisterType): { id: string } {
    let id = this.getId();

    if (this.Events.get(id)) {
      id = this.getId();
    }

    const events: EventType = {
      id,
      name: params.name,
      target_event: params.target_event,
      data: params.data,
    };

    this.Events.set(id, events);

    return { id };
  }

  /**
   * 用于注销事件
   * @param id string
   */
  logout(id: string) {
    this.Events.delete(id);
  }

  /**
   * 生成随机id
   * @returns id string(15)
   */
  private getId() {
    const id = nanoid(15);

    return id;
  }

  invoke(id: string) {}

  /**
   * inject 与 content 通信
   * @param header
   * @param targetOrigin
   */
  injectToContent(header: EventType, targetOrigin = "*") {
    const { id } = header;
    if (this.Events.get(id)) {
      window.postMessage(header, targetOrigin);
    } else {
      console.warn("请先注册，再调用");
    }
  }

  /**
   * content 接收消息
   * @returns Promise<T>
   */
  contentReceiveInject() {
    return new Promise((resolve, reject) => {
      try {
        window.addEventListener(
          "message",
          function (e) {
            resolve(e.data);
            console.log("收到信息", e.data);
          },
          false
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * content 与 background 互相通信
   * @param header 
   * @param callback 
   */
  contentToBackground(header: EventType, callback: (res: any) => void) {
    const { id } = header;

    if (this.Events.get(id)) {
      chrome.runtime.sendMessage(header, function (response) {
        callback(response);
      });
    }
  }

  backgroundReceiveContent() {
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log("收到来自content-script的消息：");
      console.log(request, sender, sendResponse);
      sendResponse("我是后台，我已收到你的消息：" + JSON.stringify(request));
    });
  }
}
