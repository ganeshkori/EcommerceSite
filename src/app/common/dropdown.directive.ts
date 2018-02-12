import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        if(this.isOpen){
            this.isOpen = false;
        }else{
            this.isOpen = true;
        }
    }
}
