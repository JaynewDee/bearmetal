import { FaSolidHouse as House } from 'solid-icons/fa'
import { OcBook2 as Book } from 'solid-icons/oc'


import { A } from '@solidjs/router'

export function Navigation() {
    return <nav class='nav-links'>
        <A href="/">
            <House class="house-icon" />
        </A>
        <A href="/posts">
            <Book class="book-icon" />
        </A>
    </nav>
}
