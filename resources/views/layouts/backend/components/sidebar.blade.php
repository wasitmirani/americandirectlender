
@push('styles')
<style>

.side-menu__label{
    padding: 0 0 0 15px ;
}
.side-menu__item{
padding: 8px 22px 8px 15px ;
    transition: all .4s ease ;
}
.dark-menu .side-menu__item i{
    display: flex ;
    align-items: center ;
}

</style>

@endpush
<aside class="app-sidebar">
    <div class="app-sidebar__logo">
        <a class="header-brand" href="index.html">
            <img src="{{ asset('backend/assets/images/brand/logo.png') }}" class="header-brand-img desktop-lgo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/logo1.png') }}" class="header-brand-img dark-logo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/favicon.png') }}" class="header-brand-img mobile-logo" alt="Azea logo">
            <img src="{{ asset('backend/assets/images/brand/favicon1.png') }}" class="header-brand-img darkmobile-logo" alt="Azea logo">
        </a>
    </div>
    @php
        $sidebar=sideBarMenu();
    @endphp
    <ul class="side-menu app-sidebar3">

        @foreach ($sidebar as $menu)
        @if(!empty($menu['heading']))
        <li class="side-item side-item-category">{{$menu['heading']}}</li>
        @endif
        @if(!empty($menu['menu']) )
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void0;">
            {{-- <svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity=".3"></path><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z"></path></svg> --}}
            <i class="{{$menu['menu']['icon']}}" height="24" viewbox="0 0 24 24" width="24"></i>
            <span class="side-menu__label">{{$menu['menu']['title']}}</span><i class="angle fe fe-chevron-right"></i></a>
            <ul class="slide-menu">
                @foreach ($menu['menu']['sub_menu'] as $item)
                <li exact-path>
                    <router-link  to="{{$item['v-route']}}"   class="slide-item">{{$item['title']}}</router-link>
                </li>
                @endforeach
            </ul>
        </li>
       @endif

       @if(!empty($menu['single_link']))
       <li class="slide">
        <router-link class="side-menu__item" data-bs-toggle="slide" to="{{$menu['single_link']['v-route']}}">
            <i class="{{$menu['single_link']['icon']}}"></i>
            <span class="side-menu__label">{{$menu['single_link']['title']}}</span>
        </router-link>
        </li>
       @endif
       @endforeach

    </ul>
</aside>
