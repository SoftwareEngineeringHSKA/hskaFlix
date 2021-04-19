import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppRoutingModule {}
