// $(function () {
//   console.log('Hello Bootstrap5');
// });
const editorWrap = document.querySelector('.ohmyeditor');

// CKeditor套件
ClassicEditor
  .create(document.querySelector('#editor'))
  .catch(error => {
    console.error(error);
  });

function toggleEditor() {
  const isOpen = editorWrap.classList.contains('active');
  if (isOpen) {
    editorWrap.classList.remove('active');
  }
  else {
    editorWrap.classList.add('active');
  }
}