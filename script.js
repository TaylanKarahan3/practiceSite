const copyright = document.querySelector('#copyright')
const aboutTest = document.querySelector('#about-test')
const btn = document.querySelector('#topBtn')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

const year = new Date().getFullYear()
copyright.innerHTML = `&copy ${year} Taylan Karahan` // copyright dynamic
// About us 
aboutTest.innerHTML = ` 
<li>
<img
    class="profile"
    src="https://randomuser.me/api/portraits/women/54.jpg"
    alt="profile-1"
/>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam praesentium aspernatur eligendi doloribus.
    Expedita nihil tenetur perferendis est rerum molestiae.
    Officiis itaque fugit a! Possimus corporis repudiandae
    magnam aliquam eius!
</p>
</li>
<li>
<img
    class="profile"
    src="https://randomuser.me/api/portraits/women/60.jpg"
    alt="profile-2"
/>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusamus tempore vitae quos molestias blanditiis autem
    libero placeat numquam sapiente id ex error ullam
    laboriosam laudantium magnam esse sed, fugit atque.
</p>
</li>
<li>
<img
    class="profile"
    src="https://randomuser.me/api/portraits/men/60.jpg"
    alt="profile-3"
/>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eveniet optio aut molestias cupiditate, tenetur
    obcaecati sequi, corrupti vitae aspernatur alias facere
    est quas, tempore ea delectus ratione nihil enim
    distinctio!
</p>
</li>

`

// Scroll to top 
function scroll() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
        ? (btn.style.display = 'block')
        : (btn.style.display = 'none')
}

window.onscroll = function () {
    scroll()
}

btn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
