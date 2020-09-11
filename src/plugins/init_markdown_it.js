// 1. importar o plugin
import MarkdownIt from 'markdown-it';

// 2. criar a função
const initMarkdownIt = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  
  // markdown = MarkdownIt.new() <- Se fosse RUBY
  const markdown = new MarkdownIt();
  
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    console.log(html);
    preview.innerHTML = html;
  });
};

// 3. exportar a função
export { initMarkdownIt };