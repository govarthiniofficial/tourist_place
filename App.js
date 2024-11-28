import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="lo" src="t1.png"></img>
      <h1>Travel Place</h1>
      <img className="menu"src="menu.png" ></img>
      </header>
      <section>
      <div >
      <h2>Goa</h2><p >Goa, state of India, comprising a mainland district on the country’s southwestern coast and an offshore island. It is located about 250 miles (400 km) south of Mumbai (Bombay). One of India’s smallest states, it is bounded by the states of Maharashtra on the north and Karnataka on the east and south and by the Arabian Sea on the west.</p>
      
      <img className="img1" src="https://th.bing.com/th?id=OIP.D0OkZGTEV2heHtku9rouRgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
      <img className="img1" src="https://th.bing.com/th?id=OIP.Dd3Y3NTA0OjCjX4ZPbtU6AHaFS&w=296&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
      <img className="img1" src="https://th.bing.com/th?id=OIP.ptVIZabGNnUZXWSgm-EbXQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>

      </div>
      </section>
      <hr></hr>
      <section>
      <div className="cont2">
       <h2>Maldives</h2>
       <p>Maldives, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.
The islands extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west. The northernmost atoll is about 370 miles (600 km) south-southwest of the Indian mainland, and the central area, including the capital island of Male (Male’), is about 400 miles (645 km) southwest of Sri Lanka.</p>
       <img className="img2" src="https://th.bing.com/th?id=OIP.CYpOWHm006GrqsCsZ1EUjwHaEj&w=318&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
       <img className="img2" src="https://th.bing.com/th?id=OIP.vy0Zu1AUM4AaiOeHBBw45gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
       <img className="img2" src="https://th.bing.com/th?id=OIP.KDWSRiTZEzhj3Iqr3VbeXwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>


      </div>
      </section>
      <section>
      <div className="cont3">
       <h2>Himachal Pradesh</h2>
       <p>Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir and Ladakh to the north, and the states of Punjab to the west, Haryana to the southwest, Uttarakhand to the southeast and a very narrow border with Uttar Pradesh to the south.</p>
       <img className="img3" src="https://th.bing.com/th/id/OIP.t8m6CABWu5SuVCHYRWRuPQHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
       <img className="img3" src="https://th.bing.com/th/id/OIP.dqcnmNZNkn1DyLmFyLmkagHaFj?w=236&h=177&c=7&o=5&dpr=1.3&pid=1.20"></img>
       <img className="img3" src="https://th.bing.com/th/id/OIP.jgyszLqXliMh-qkPAY6tswHaE7?w=236&h=157&c=7&o=5&dpr=1.3&pid=1.20"></img>

      </div>
      </section>
      <section id="contact" class="section contact">
    <div class="con">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any queries or collaborations.</p>
      <form>
          <input type="text" placeholder="Your Name" required></input>
          <input type="email" placeholder="Your Email" required></input>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
      </form>
    </div>
      </section>
  <footer class="footer">            
  <div class="con">
      <p> &copy; 2024 travelplaces. All rights reserved. </p>
  </div>
  </footer>
    </div>

);
}
export default App;

