import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ❤️ by <b>PJ Group B</b>
    </span>
    <div class="socials">
      <a href="https://github.com/tyspt/project-studium-admin-portal" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
