export default class Collapse {
  init() {
    this.collapseBtn = document.querySelector('.collapse-btn');
    this.collapse = document.querySelector('.collapse');
    this.collapseBtn.addEventListener('click', () => {
      this.collapse.classList.toggle('active');
    });
  }
}
