class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<header>
        <div class="container">
            <h1>Avickz XPhotography</h1>
        </div>
    </header>`
       
    }

}
class SpecialNavbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<nav class="navbar">
        <div class="container">
            <div class="logo"><img src="image/logo3.png" alt="Logo"></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
        </div>
    </nav>`
       
    }

}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<footer>
        <div class="container">
            <div class="row">
              <!-- About Section -->
              <div class="col-md-4">
                <h5>About Me</h5>
                <p>At Avickz XPhotography, we specialize in capturing the essence of your most cherished moments. From portraits to events, we bring your story to life through stunning photography. Browse our portfolio and let us help you preserve memories that last a lifetime.
                 
           
</p>
                <a href="about.html" class="btn btn-link">Learn More</a>
              </div>
        
              <!-- Social Links Section -->
              <div class="col-md-4">
                <h5>Follow Me</h5>
                <a href="https://www.instagram.com" class="btn btn-link">Instagram</a>
                <a href="https://www.facebook.com" class="btn btn-link">Facebook</a>
                <a href="https://www.linkedin.com" class="btn btn-link">LinkedIn</a>
              </div>
        
              <!-- Contact Section -->
              <div class="col-md-4">
                <h5>Contact</h5>
                <p>Email: info@photographer.com</p>
                <p>Phone: +91 9064862740</p>
                <a href="contact.html" class="btn btn-link">Contact Form</a>
              </div>
            </div>
        
            <hr class="my-4">
        
            <div class="row">
              <!-- Newsletter Section -->
              <div class="col-md-6">
                <h5>Signup</h5>
                <form action="#">
                  <input type="email" class="form-control mb-2" placeholder="Enter your email">
                  <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
              </div>
        
              <!-- Quick Links Section -->
              <div class="col-md-6">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li><a href="about.html" class="text-white">About</a></li>
                  <li><a href="service.html" class="text-white">Services</a></li>
                  <li><a href="contact.html" class="text-white">Contact</a></li>
               
                </ul>
              </div>
            </div>
        
            <hr class="my-4">
        
            <!-- Copyright Section -->
            <div class="text-center">
              <p>&copy; 2024 Avick Naha Photography. All rights reserved.</p>
            </div>
          </div>
    </footer>`
        
    }

}
customElements.define('special-header',SpecialHeader);
customElements.define('special-footer',SpecialFooter);
customElements.define('special-navbar',SpecialNavbar);



