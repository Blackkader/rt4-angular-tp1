import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Rainbow } from './rainbow';

@Component({
  imports: [Rainbow],
  template: `<input appRainbow id="i" /><div appRainbow id="d"></div>`,
})
class Host {}

describe('Rainbow', () => {
  it("s'applique uniquement sur un input et change la couleur au keyup", async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    expect(fixture.debugElement.queryAll(By.directive(Rainbow)).length).toBe(1);

    const input = fixture.debugElement.query(By.css('#i'));
    input.triggerEventHandler('keyup', {});
    await fixture.whenStable();
    const el: HTMLInputElement = input.nativeElement;
    expect(el.style.color).toMatch(/^rgb\(/);
    expect(el.style.borderColor).toBe(el.style.color);
  });
});
