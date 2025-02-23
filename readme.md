## Matthew Sparkman | Assignment 3

### Weekly Recap

This week we went over the process of creating custom block themes and widgets

1. We learned how to set up a custom widget
    - In order to create a new widget area you would register it in the functions.php file with the register_sidebar() function.

```php
function my_custom_widgets_init() {
    register_sidebar(array(
        'name'          => __('Custom Sidebar', 'my-theme'),
        'id'            => 'custom-sidebar',
        'before_widget' => '<div class="custom-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'my_custom_widgets_init');
```
- This will create a new widget area called Custom Sidebar and will show up in the WordPress dashboard.

2. We also learned about creating block themes
    - It is the same setup, at first, as the normal theme development.
    - Then you create template files in the `templates` folder.
    - You must create an index.html file inside of the index folder and this file will be set as the default page.
    - For each block, you must use custom WordPress blocks using html comments. 
```html
  <!-- wp:heading {"level": 1} -->
  <h1>Welcome to <span>Collins Music Academy</span></h1>
  <!-- /wp:heading -->
```  
- With these custom WordPress blocks, you can use the WordPress editor to change the values inside of them.

---

### Admin Credentials:

username: **admin**
password: **admin**


#### Additional Theme Information
- The mobile nav menu works perfectly without the Admin Bar on the screen. With the `wpadminbar` on the screen it is positioned awkwardly.
- On the instructors page, if you click on one of the instructors html is injected into the page with information about the instructor and a contact form.