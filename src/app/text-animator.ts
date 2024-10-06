export class TextAnimator {
  private CHAR_TIME: number;
  private text: string;
  private index: number;
  private element: HTMLElement;

  constructor(element: HTMLElement, charTime: number = 30) {
    this.element = element;
    this.CHAR_TIME = charTime;
    this.index = 0;
    this.text = '';
  }

  private requestCharAnimation(char: HTMLSpanElement, value: string): void {
    setTimeout(() => {
      char.textContent = value;
      char.classList.add('fade-in');
    }, this.CHAR_TIME);
  }

  private addChar(): void {
    const char = document.createElement('span');
    char.classList.add('char');
    char.textContent = '▌';
    this.element.appendChild(char);
    this.requestCharAnimation(char, this.text.substr(this.index++, 1));

    if (this.index < this.text.length) {
      this.requestChar();
    }
  }

  private requestChar(delay: number = 0): void {
    setTimeout(() => this.addChar(), this.CHAR_TIME + delay);
  }

  public start(): void {
    this.index = 0;
    this.text = this.element.textContent?.trim() || '';
    this.element.textContent = '';
    this.element.style.visibility = 'visible';
    this.requestChar(1000);
  }
}
