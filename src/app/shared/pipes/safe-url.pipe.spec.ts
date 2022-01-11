import {TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeUrlPipe} from './safe-url.pipe';


describe('SafeUrlPipe', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [],    
        providers: [DomSanitizer]
     }).compileComponents();
  });

  it('create an instance', () => {
    let sanitizer = TestBed.inject(DomSanitizer);
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
