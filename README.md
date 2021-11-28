# angular-basics
Build an angular application with Mark Thompson 

### Components
helps you create more scalable applications 

- TypeScript
    - Takes in Typescript and outputing JavaScript 
    - JavaScript compiler 
- CSS 
    - CSS preprocessor (Sass)
    - Supports SCSS out of the box (YES!!!)
- HTML 


### Steps

**Step 1**

```
ng new fairhouse --routing 
```
- ng -- the community starts using it -- represent angular application 
- "--routing" -- that mean you want routing enabled 

You should see a folder "fairhouse" created

**Step 2** 

Open up your VSC or any other IDE you use 

**Step 3**

```
cd fairhouse
ng serve
```
OR 

```
cd fairhouse
ng serve --open 
```

When you go to localhost:4200 --> You will see your fairhouse angular app


**Step 4** 

Go to app.component.html

Removed all codes except for:

```
<router-outlet></router-outlet>
```

it should be on line 501 

**Step 5** 

```
<header>
  <h1>FairHouse</h1>
</header>
<main>
  <router-outlet></router-outlet>
</main>

```

**Step 6** 

```
ng generate component home 
```

**Step 6** 

app-routing.module.ts

```
const routes: Routes = [{ //creating the routes 
  path: '', 
  component: HomeComponent //home page 
}];
```

NOTE: 
REMEMBER TO KEEP THE ```ng serve``` ON!!! 
REMEMBER TO GET THE VSC EXTENSION - ANGULAR LANGUAGE SERVICE 

**Step 6** 
Go to your home.component.html 

```
```

app.module.ts - provides all the dependencies 
- import means bring the library into this application 

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


"--forms" - Sue Austin asks in the chat? 


Go to home.component.ts

```
```

*ng => similar to a for loop 