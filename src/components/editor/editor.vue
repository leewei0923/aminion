<script setup lang="ts">
import {
  TextBold,
  TextItalic,
  Code,
  H1,
  H2,
  List,
  Quote,
  Undo,
  Redo,
  AlignTextLeft,
  AlignTextCenter,
  AlignTextRight,
  H,
  Delete,
  Save,
} from "@icon-park/vue-next";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";
import ListItem from "@tiptap/extension-list-item";
import Lowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";
import { onBeforeUnmount, onMounted, ref } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  hidden: { type: Boolean, required: true },
});

const editor = useEditor({
  content: "hello tiptap",

  extensions: [
    StarterKit,
    Typography,
    Lowlight.configure({
      lowlight,
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Heading,
    Text,
  ],
});

// 默认标题
let defaultTitleRef = ref("");

onMounted(() => {
  defaultTitleRef.value = dayjs().format("YYYYMMDDHHmm");
});


const onSave = () => {
  console.log(editor.value?.getHTML());
  console.log(defaultTitleRef.value);
};
</script>

<template>
  <div class="aminion-editor-container" v-if="editor" :hidden="props.hidden">
    <div class="aminion-editor-title-container">
      <span>标题:</span>
      <input
        type="text"
        class="aminion-editor-title-input"
        placeholder="请输入标题"
        v-model="defaultTitleRef"
      />
    </div>
    <editor-content class="aminion-editor-content" :editor="editor" />

    <section class="aminion-editor-sider-options">
      <text-bold
        theme="outline"
        @click="editor?.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      />
      <text-italic
        theme="outline"
        @click="editor?.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      />
      <Code
        theme="outline"
        @click="editor?.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      />
      <H1
        theme="outline"
        @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      />
      <H2
        theme="outline"
        @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      />
      <list
        theme="outline"
        @click="editor?.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      />
      <quote
        theme="outline"
        @click="editor?.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      />
      <align-text-left
        theme="outline"
        @click="
          editor === undefined
            ? null
            : editor.chain().focus().setTextAlign('left').run()
        "
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      />
      <align-text-center
        theme="outline"
        @click="editor?.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      />
      <align-text-right
        theme="outline"
        @click="editor?.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      />
      <undo
        theme="outline"
        @click="editor?.chain().focus().undo().run()"
        :disabled="!editor.can().undo()"
        class="undo"
      />
      <redo
        theme="outline"
        class="redo"
        @click="editor?.chain().focus().redo().run()"
        :disabled="!editor.can().redo()"
      />

      <div class="aminion-editor-operate-boxs">
        <delete theme="outline" fill="#EE685D" title="删除" />
        <save theme="outline" fill="#1D7DFA" title="保存" @click="onSave" />
      </div>
    </section>
  </div>
</template>

<style>
.aminion-editor-container {
  position: fixed;
  right: 100px;
  width: 25vw;
  height: 80vh;
  background-color: var(--normal_background);
  border-radius: 0 0 0 10px;
}

/* 标题框 */
.aminion-editor-title-container {
  width: calc(100% + 30px);
  height: 30px;
  background-color: #70cff8;
  position: absolute;
  top: -30px;
  border-radius: 10px 10px 0 0;
  background-color: var(--normal_background);
  border-bottom: 2px dashed var(--sider_bar_btn);
}

.aminion-editor-title-input {
  border: none;
  margin: 0 0 0 5px;
  height: 100%;
  background-color: var(--normal_background);
  outline: none;
  width: 82%;
}

.aminion-editor-content {
  outline: none;
  padding: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.aminion-editor-content div {
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.aminion-editor-content .ProseMirror::-webkit-scrollbar {
  width: 2px;
}

.aminion-editor-content .ProseMirror::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

/* 基础样式 */
.aminion-editor-content .ProseMirror > * + * {
  margin-top: 0.75em;
}

.aminion-editor-content .ProseMirror a {
  color: #68cef8;
}

.aminion-editor-content .ProseMirror code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: rgba(#616161, 0.1);
  color: #ffffff;
  box-decoration-break: clone;
}

.aminion-editor-content .ProseMirror ul,
ol {
  padding: 0 1rem;
}

.aminion-editor-content .ProseMirror h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

.aminion-editor-content .ProseMirror pre {
  background: #0d0d0d;
  color: #fff;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.aminion-editor-content .ProseMirror img {
  max-width: 100%;
  height: auto;
}

.aminion-editor-content .ProseMirror blockquote {
  padding-left: 0.8rem;
  border-left: 2px solid rgba(15, 15, 15, 0.1);
}

.aminion-editor-content .ProseMirror hr {
  border: none;
  border-top: 2px solid rgba(15, 15, 15, 0.1);
  margin: 0.5rem 0;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-name,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #f98181;
}

.hljs-number,
.hljs-meta,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params {
  color: #fbbc88;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
  color: #b9f18d;
}

.hljs-title,
.hljs-section {
  color: #faf594;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #70cff8;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 700;
}

/* ================================ */

.aminion-editor-sider-options .undo[disabled] {
  color: rgb(116, 116, 116);
}

.aminion-editor-sider-options .redo[disabled] {
  color: rgb(116, 116, 116);
}

.aminion-editor-sider-options .is-active {
  color: #fff;
  position: relative;
  z-index: 0;
}

.aminion-editor-sider-options .is-active::after {
  display: block;
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  z-index: -1;
  width: 5px;
  height: 5px;
  padding: 8px;
  border-radius: 2px;
  background-color: var(--deep_blue_800);
}

.aminion-editor-sider-options {
  background-color: var(--normal_background);
  border-radius: 0 0 10px 0;
  border-left: 2px dashed var(--sider_bar_btn);
  position: absolute;
  right: -30px;
  top: 0;
  width: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  justify-content: flex-start;
  row-gap: 10px;
  align-items: center;
  padding: 10px 0;
  color: #333;
}

@media (max-height: 640px) {
  .aminion-editor-sider-options {
    row-gap: 3px;
  }
}

.aminion-editor-sider-options span {
  cursor: pointer;
}

.aminion-editor-operate-boxs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  bottom: 20px;
  row-gap: 10px;
  color: #ee685d;
  font-weight: 700;
}
</style>
