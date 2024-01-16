import asher from './images/asher.jpg';

function App() {


  return (

    <div>
     <header>
          <div>
           <h1>Muhammad Asher Imtiaz</h1>
           
            <p>Web Developer</p>
            </div>
            <div class="profile-picture">
            <img src={asher} alt="Your Profile Picture"></img>
        </div>
        </header>

      <section id="contact" class="info">
        <div>
          <h2>Contact</h2>
          <p>Email: writetoaasher@gmail.com</p>
          <p>Phone: +92300-6714073</p>
          <p>Website: </p>
        </div>
        <div>

        </div>
      </section>

      <section id="education" class="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>National College of Bussiness Administration and Ecnomics</h3>
            <p>Degree: MPhill Computer Science</p>
            <p>Graduation Year: 2016</p>
          </li>

        </ul>
      </section>

      <section id="experience" class="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>CRM Expert </h3>
            <p>Company: Go High Level</p>
            <p>Location: Online </p>
            <p>Duration: Nov-2017 to Till Date </p>
            <p>Description: Designing Funnels, Websites, Aoutmation, Leads Generation, Opiontment Setting</p>
          </li>

        </ul>
        <ul>
          <li>
            <h3>Lecturer Computer Science</h3>
            <p>Company: Army Public School and College</p>
            <p>Location: Rahim Yar Khan , Pakistan</p>
            <p>Duration: Nov-2017 to Till Date </p>
            <p>Description: HOD Computer Science .IT Resource Management.</p>
          </li>

        </ul>
        <ul>
          <li>
            <h3>Network Support Engineer</h3>
            <p>Company: Telconet Services Pvt Ltd</p>
            <p>Location: Rahim Yar Khan , Pakistan</p>
            <p>Duration: Feb-2014 - Nov-2017</p>
            <p>Description: Network Administration, Data Base Administraion. Training to Staff, Troublshooting.</p>
          </li>

        </ul>
      </section>
      <section id="course" class="course">
        <h2>Certification</h2>
        <ul>
          <li>
            <h3>Full Stack Web Developer</h3>
            <p>NexusBerry Lahore</p>
            <p>2023-2024</p>
          </li>

        </ul>
        <ul>
          <li>
            <h3>JavaScript Boot Camp</h3>
            <p>Udemy Online</p>
            <p>2023</p>
          </li>

        </ul>
      </section>

    </div>

  )
}

export default App
