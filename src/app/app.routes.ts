import { Routes } from '@angular/router';
import { DirectMessage } from './direct-message/direct-message.component';
import { GroupMessage } from './group-message/group-message.component';
import { PublicPost } from './public-post/public-post.component';
import { Settings } from './settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'direct-message', pathMatch: 'full' },
  { path: 'direct-message', component: DirectMessage },
  { path: 'group-message', component: GroupMessage },
  { path: 'public-post', component: PublicPost },
  { path: 'settings', component: Settings }
];