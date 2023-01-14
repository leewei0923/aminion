/**
 * 存储数据
 * @param {*} data
 * @param {*} callback
 */

interface StorageDataType {
  [key: string]: unknown;
}

type SetStorageCallbackType = (stauts: "ok" | "fail") => void;

function setStorage(data: StorageDataType, callback?: SetStorageCallbackType) {
  chrome.storage.sync.set(data, function () {
    const msg = "ok";
    if (typeof callback === "function") {
      callback(msg);
    }
  });
}


type GetStorageCallbackType = (stauts: "ok" | "fail") => void;

function getStorage(data: StorageDataType, callback: (arg0: { [key: string]: any; }) => void) {
  // 读取数据，第一个参数是指定要读取的key以及设置默认值
  chrome.storage.sync.get(data, function (items) {
    if (typeof callback === "function") {
      callback(items);
    }
  });
}

export { setStorage, getStorage };


