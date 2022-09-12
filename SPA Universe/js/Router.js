export default class Router {
    routes = {}
    
    add(routeName, page) {
        this.routes[routeName] = page
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route)
        .then(data => data.text())
        .then(data => {
            document.getElementById('content').innerHTML = data
        })

        document.querySelectorAll('nav a')
            .forEach((link) => {
                link.classList.remove('current')

                if (link.pathname == pathname) {
                    link.classList.add('current')
                }
        })

        if (pathname == '/') {
            document.querySelector('body').style.background = 'var(--b-image-1)'
            document.querySelector('body').style.backgroundSize = 'cover'
        }

        if (pathname == '/universe') {
            document.querySelector('body').style.background = 'var(--b-image-2)'
            document.querySelector('body').style.backgroundSize = 'cover'
        }

        if (pathname == '/exploration') {
            document.querySelector('body').style.background = 'var(--b-image-3)'
            document.querySelector('body').style.backgroundSize = 'cover'
        }
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, '', event.target.href)

        this.handle()
    }
}