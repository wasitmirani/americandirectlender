<aside class="app-sidebar">
    <div class="app-sidebar__logo">
        <a class="header-brand" href="index.html">
            <img src="{{ asset('backend/assets/images/brand/logo.png') }}" class="header-brand-img desktop-lgo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/logo1.png') }}" class="header-brand-img dark-logo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/favicon.png') }}" class="header-brand-img mobile-logo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/favicon1.png') }}" class="header-brand-img darkmobile-logo" alt="Azea logo">
        </a>
    </div>
    <ul class="side-menu app-sidebar3">
        <li class="side-item side-item-category">Main</li>
        <li class="slide">
            <a class="side-menu__item" href="{{ route('dashboard') }}">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewbox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"></path><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"></path><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"></path><polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"></polygon></g></g></svg>
            <span class="side-menu__label">Dashboard</span></a>
        </li>
        <li class="side-item side-item-category">Components</li>
        {{-- {{-- <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M13.03 16.72l3.63 3.62 3.62-3.63-3.62-3.62zM7.29 3.71L3.66 7.34l3.63 3.62 3.62-3.63z" opacity=".3"></path><path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29s.51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"></path></svg>
            <span class="side-menu__label">Utilities</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li><a href="elements-border.html" class="slide-item"> Border</a></li>
                <li><a href="element-colors.html" class="slide-item"> Colors</a></li>
                <li><a href="elements-display.html" class="slide-item"> Display</a></li>
                <li><a href="element-flex.html" class="slide-item"> Flex Items</a></li>
                <li><a href="element-height.html" class="slide-item"> Height</a></li>
                <li><a href="elements-margin.html" class="slide-item"> Margin</a></li>
                <li><a href="elements-paddning.html" class="slide-item"> Padding</a></li>
                <li><a href="element-typography.html" class="slide-item"> Typhography</a></li>
                <li><a href="element-width.html" class="slide-item"> Width</a></li>
            </ul>
        </li> --}}
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity=".3"></path><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z"></path></svg>
            <span class="side-menu__label">Elements</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li><a href="accordion.html" class="slide-item"> Accordion</a></li>
                <li><a href="alerts.html" class="slide-item"> Alerts</a></li>
                <li><a href="avatars.html" class="slide-item"> Avatars</a></li>
                <li><a href="badge.html" class="slide-item"> Badges</a></li>
                <li><a href="breadcrumbs.html" class="slide-item"> Breadcrumb</a></li>
                <li><a href="buttons.html" class="slide-item"> Buttons</a></li>
                <li><a href="cards.html" class="slide-item"> Cards</a></li>
                <li><a href="cards-image.html" class="slide-item"> Card Images</a></li>
                <li><a href="carousel.html" class="slide-item"> Carousel</a></li>
                <li><a href="dropdown.html" class="slide-item"> Dropdown</a></li>
                <li><a href="footers.html" class="slide-item"> Footers</a></li>
                <li><a href="list.html" class="slide-item"> List Group</a></li>
                <li><a href="media-object.html" class="slide-item"> Media Obejct</a></li>
                <li><a href="modal.html" class="slide-item"> Modal</a></li>
                <li><a href="navigation.html" class="slide-item"> Navigation</a></li>
                <li><a href="pagination.html" class="slide-item"> Pagination</a></li>
                <li><a href="panels.html" class="slide-item"> Panel</a></li>
                <li><a href="popover.html" class="slide-item"> Popover</a></li>
                <li><a href="progress.html" class="slide-item"> Progress</a></li>
                <li><a href="tabs.html" class="slide-item"> Tabs</a></li>
                <li><a href="tags.html" class="slide-item"> Tags</a></li>
                <li><a href="tooltip.html" class="slide-item"> Tooltips</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>
            <span class="side-menu__label">Apps</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu ">
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Chat</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="chat.html">Chat 01</a></li>
                        <li><a class="sub-slide-item" href="chat2.html">Chat 02</a></li>

                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Contact</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="contact-list.html">Contact list 01</a></li>
                        <li><a class="sub-slide-item" href="contact-list2.html">Contact list 02</a></li>
                    </ul>
                </li>
                <li><a href="calendar.html" class="slide-item"> Calendar</a></li>
                <li><a href="cookies.html" class="slide-item"> Cookies</a></li>
                <li><a href="counters.html" class="slide-item"> Counters</a></li>
                <li><a href="dragula.html" class="slide-item"> Dragula Card</a></li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">File Manager</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="file-manager.html">File Manager 01</a></li>
                        <li><a class="sub-slide-item" href="file-manager-list.html">File Manager 02</a></li>
                    </ul>
                </li>
                <li><a href="image-comparison.html" class="slide-item"> Image Comparison</a></li>
                <li><a href="img-crop.html" class="slide-item"> Image Crop</a></li>
                <li><a href="loaders.html" class="slide-item"> Loaders</a></li>
                <li><a href="notify.html" class="slide-item"> Notifications</a></li>
                <li><a href="page-sessiontimeout.html" class="slide-item"> Page-sessiontimeout</a></li>
                <li><a href="rangeslider.html" class="slide-item"> Range slider</a></li>
                <li><a href="rating.html" class="slide-item"> Rating</a></li>
                <li><a href="sweetalert.html" class="slide-item"> Sweet alerts</a></li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Todo List</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="todo-list.html">Todo List 01</a></li>
                        <li><a class="sub-slide-item" href="todo-list2.html">Todo List 02</a></li>
                        <li><a class="sub-slide-item" href="todo-list3.html">Todo List 03</a></li>
                    </ul>
                </li>
                <li><a href="time-line.html" class="slide-item"> Time Line</a></li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">User List</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="users-list-1.html">User List 01</a></li>

                        <li><a class="sub-slide-item" href="users-list-3.html">User List 03</a></li>

                    </ul>
                </li>
            </ul>
        </li>
        <li class="side-item side-item-category">Tables & Icons </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z" opacity=".3"></path><path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z"></path></svg>
            <span class="side-menu__label">Tables</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li><a href="tables.html" class="slide-item">Default table</a></li>
                <li><a href="datatable.html" class="slide-item">Data Table</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".3"></path><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z"></path><circle cx="6.5" cy="11.5" r="1.5"></circle><circle cx="9.5" cy="7.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle><circle cx="17.5" cy="11.5" r="1.5"></circle></svg>
            <span class="side-menu__label">Icons</span><span class="badge bg-danger  side-badge">11</span></a>
            <ul class="slide-menu">
                <li><a href="icons.html" class="slide-item"> Font Awesome</a></li>
                <li><a href="icons2.html" class="slide-item"> Material Design Icons</a></li>
                <li><a href="icons3.html" class="slide-item"> Simple Line Icons</a></li>
                <li><a href="icons4.html" class="slide-item"> Feather Icons</a></li>
                <li><a href="icons5.html" class="slide-item"> Ionic Icons</a></li>
                <li><a href="icons6.html" class="slide-item"> Flag Icons</a></li>
                <li><a href="icons7.html" class="slide-item"> pe7 Icons</a></li>
                <li><a href="icons8.html" class="slide-item"> Themify Icons</a></li>
                <li><a href="icons9.html" class="slide-item">Typicons Icons</a></li>
                <li><a href="icons10.html" class="slide-item">Weather Icons</a></li>
                <li><a href="icons11.html" class="slide-item">Material Svgs</a></li>
                <li><a href="icons12.html" class="slide-item">Bootstrap Svgs</a></li>
                </ul>
        </li>
        <li class="side-item side-item-category">Widgets & Maps</li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
           <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewbox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="4" opacity=".3" width="4" x="5" y="5"></rect><rect height="4" opacity=".3" width="4" x="5" y="15"></rect><rect height="4" opacity=".3" width="4" x="15" y="15"></rect><rect height="4" opacity=".3" width="4" x="15" y="5"></rect><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"></path><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"></path><path d="M13,21h8v-8h-8V21z M15,15h4v4h-4V15z"></path><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"></path></g></g></svg>
            <span class="side-menu__label">Widgets</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu ">
                <li><a href="widgets-2.html" class="slide-item">Chart Widgets</a></li>
                <li><a href="widgets-1.html" class="slide-item">Widgets</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewbox="0 0 24 24" width="24"><path d="M18.5,10.2c0,2.57-2.1,5.79-6.16,9.51L12,20.01l-0.34-0.31C7.6,15.99,5.5,12.77,5.5,10.2 c0-3.84,2.82-6.7,6.5-6.7S18.5,6.35,18.5,10.2z" fill-opacity=".3"></path><path d="M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z M18,10.2 C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2 s2,0.9,2,2S13.1,12,12,12z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
            <span class="side-menu__label">Map</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li><a href="maps2.html" class="slide-item">Leaflet Maps</a></li>
                <li><a href="maps.html" class="slide-item">Vector Maps</a></li>
            </ul>
        </li>
        <li class="side-item side-item-category">Forms & Charts </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewbox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M15,5H5v14h14V9h-4V5z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,11v2H7v-2H17z" opacity=".3"></path><path d="M7,13h10v-2H7V13z M7,17h10v-2H7V17z M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M19,19H5V5 h10v4h4V19z M12,7H7v2h5V7z"></path></g></svg>
            <span class="side-menu__label">Forms</span><span class="badge bg-success side-badge">6</span></a>
            <ul class="slide-menu">
                <li><a href="form-elements.html" class="slide-item"> Form Elements</a></li>
                <li><a href="advanced-forms.html" class="slide-item"> Advanced Forms</a></li>
                <li><a href="form-wizard.html" class="slide-item"> Form Wizard</a></li>
                <li><a href="form-editor.html" class="slide-item"> Form Editor</a></li>
                <li><a href="form-sizes.html" class="slide-item"> Form Element Sizes</a></li>
                <li><a href="form-treeview.html" class="slide-item"> Form Treeview</a></li>
                <li><a href="form-validations.html" class="slide-item"> Form Validations</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 19h14V5H5v14zm10-6h2v4h-2v-4zm-4-6h2v10h-2V7zm-4 3h2v7H7v-7z" opacity=".3"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path></svg>
            <span class="side-menu__label">Charts</span><span class="badge bg-info side-badge">7</span></a>
            <ul class="slide-menu">
                <li><a href="chart-apex.html" class="slide-item"> Apex Charts</a></li>
                <li><a href="chart-chartist.html" class="slide-item">Chartjs Charts</a></li>
                <li><a href="chart-echart.html" class="slide-item"> Echart Charts</a></li>
                <li><a href="chart-flot.html" class="slide-item"> Flot Charts</a></li>
                <li><a href="chart-morris.html" class="slide-item"> Morris Charts</a></li>
                <li><a href="chart-peity.html" class="slide-item"> Pie Charts</a></li>
                <li><a href="chart-c3.html" class="slide-item">C3 Charts</a></li>
            </ul>
        </li>
        <li class="side-item side-item-category">Custom  & Error Pages</li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 1c.46 0 .9.06 1.33.15l-2.72 4.7-2.32-3.56C9.31 7.49 10.6 7 12 7zm-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1zm.35 2h5.33l-2.03 3.5.11.06c-1.59-.64-2.84-1.94-3.41-3.56zM12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92 2.11 3.9c-1 .74-2.23 1.19-3.57 1.19zm6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1zm-5.74-2l2.05-3.54c1.56.65 2.77 1.94 3.34 3.54h-5.39z" opacity=".3"></path><path d="M7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm6.76-1.53L12.26 11h5.39c-.57-1.6-1.78-2.89-3.34-3.54zm-.98-.31C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7zM11.68 15H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm7.35-7.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM9 1h6v2H9zm7.34 16.13C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-5.73 1.7c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92z"></path></svg>
            <span class="side-menu__label">Custom Pages</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Register</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="register-1.html">Register 01</a></li>
                        <li><a class="sub-slide-item" href="register-2.html">Register 02</a></li>
                        <li><a class="sub-slide-item" href="register-3.html">Register 03</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Login</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="login-1.html">Login 01</a></li>
                        <li><a class="sub-slide-item" href="login-2.html">Login 02</a></li>
                        <li><a class="sub-slide-item" href="login-3.html">Login 03</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Forget Password</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="forgot-password-1.html">Forget Password 01</a></li>
                        <li><a class="sub-slide-item" href="forgot-password-2.html">Forget Password 02</a></li>
                        <li><a class="sub-slide-item" href="forgot-password-3.html">Forget Password 03</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Reset Password</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="reset-password-1.html">Reset Password 01</a></li>
                        <li><a class="sub-slide-item" href="reset-password-2.html">Reset Password 02</a></li>
                        <li><a class="sub-slide-item" href="reset-password-3.html">Reset Password 03</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Lock Screen</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="lockscreen-1.html">Lock Screen 01</a></li>
                        <li><a class="sub-slide-item" href="lockscreen-2.html">Lock Screen 02</a></li>
                        <li><a class="sub-slide-item" href="lockscreen-3.html">Lock Screen 03</a></li>
                    </ul>
                </li>
                <li><a href="construction.html" class="slide-item"> Under Construction</a></li>
                <li><a href="coming.html" class="slide-item"> Coming Soon</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity=".3"></path><path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"></path></svg>
            <span class="side-menu__label">Error Pages</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li><a href="400.html" class="slide-item"> 400</a></li>
                <li><a href="401.html" class="slide-item"> 401</a></li>
                <li><a href="403.html" class="slide-item"> 403</a></li>
                <li><a href="404.html" class="slide-item"> 404</a></li>
                <li><a href="500.html" class="slide-item"> 500</a></li>
                <li><a href="503.html" class="slide-item"> 503</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewbox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 18h16V6H4v12zm14-2h-2v-2h2v2zm-8-6h8v2h-8v-2zm-4 0h2v2H6v-2zm0 4h8v2H6v-2z" opacity=".3"></path><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"></path></svg>
            <span class="side-menu__label">Sub Menus</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu ">
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Submenu 1</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="javascript:void0;">Submenu 1.1</a></li>
                        <li class="sub-slide2">
                            <a class="sub-slide-item2" data-bs-toggle="sub-slide2" href="javascript:void0;"><span class="sub-side-menu__label2">Submenu 1.2</span><i class="sub-angle2 fe fe-chevron-right"></i></a>
                            <ul class="sub-slide-menu2">
                                <li><a href="javascript:void0;" class="sub-slide-item2">Submenu 1.2.1</a></li>
                                <li><a href="javascript:void0;" class="sub-slide-item2">Submenu 1.2.2</a></li>
                                <li><a href="javascript:void0;" class="sub-slide-item2">Submenu 1.2.3</a></li>
                            </ul>
                        </li>
                        <li><a class="sub-slide-item" href="javascript:void0;">Submenu 1.3</a></li>
                    </ul>
                </li>
                <li><a href="javascript:void0;" class="slide-item">Submenu 2</a></li>
                <li><a href="javascript:void0;" class="slide-item">Submenu 3</a></li>
                <li><a href="javascript:void0;" class="slide-item">Submenu 4</a></li>
            </ul>
        </li>
        <li class="side-item side-item-category">Pages & E-Commerce</li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3"></path><path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"></path></svg>
            <span class="side-menu__label">Pages</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Profile</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="profile-1.html">Profile 01</a></li>
                        <li><a class="sub-slide-item" href="profile-2.html">Profile 02</a></li>
                        <li><a class="sub-slide-item" href="profile-3.html">Profile 03</a></li>
                    </ul>
                </li>
                <li><a href="editprofile.html" class="slide-item"> Edit Profile</a></li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Email</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="email-compose.html">Email Compose</a></li>
                        <li><a class="sub-slide-item" href="email-inbox.html">Email Inbox</a></li>
                        <li><a class="sub-slide-item" href="email-read.html">Email Read</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Pricing</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="pricing.html">Pricing 01</a></li>
                        <li><a class="sub-slide-item" href="pricing-2.html">Pricing 02</a></li>
                        <li><a class="sub-slide-item" href="pricing-3.html">Pricing 03</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Invoice</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="invoice-list.html">Invoice list</a></li>
                        <li><a class="sub-slide-item" href="invoice-1.html">Invoice 01</a></li>
                        <li><a class="sub-slide-item" href="invoice-2.html">Invoice 02</a></li>
                        <li><a class="sub-slide-item" href="invoice-3.html">Invoice 03</a></li>
                        <li><a class="sub-slide-item" href="invoice-add.html">Add Invoice</a></li>
                        <li><a class="sub-slide-item" href="invoice-edit.html">Edit Invoice</a></li>
                    </ul>
                </li>
                <li class="sub-slide">
                    <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void0;"><span class="sub-side-menu__label">Blog</span><i class="sub-angle fe fe-chevron-right"></i></a>
                    <ul class="sub-slide-menu">
                        <li><a class="sub-slide-item" href="blog.html">Blog 01</a></li>
                        <li><a class="sub-slide-item" href="blog-2.html">Blog 02</a></li>
                        <li><a class="sub-slide-item" href="blog-3.html">Blog 03</a></li>
                        <li><a class="sub-slide-item" href="blog-styles.html">Blog Styles</a></li>
                    </ul>
                </li>
                <li><a href="gallery.html" class="slide-item"> Gallery</a></li>
                <li><a href="faq.html" class="slide-item"> FAQS</a></li>
                <li><a href="terms.html" class="slide-item"> Terms</a></li>
                <li><a href="search.html" class="slide-item"> Search</a></li>
                <li><a href="empty.html" class="slide-item"> Empty Page</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3"></path><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            <span class="side-menu__label">E-Commerce</span><span class="badge bg-secondary side-badge">5</span></a>
            <ul class="slide-menu">
                <li><a href="shop.html" class="slide-item"> Products</a></li>
                <li><a href="shop-des.html" class="slide-item">Product Details</a></li>
                <li><a href="cart.html" class="slide-item"> Shopping Cart</a></li>
                 <li><a href="checkout.html" class="slide-item"> Checkout</a></li>
                <li><a href="wishlist.html" class="slide-item">wishlist</a></li>
            </ul>
        </li>
    </ul>
</aside>
