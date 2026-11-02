
"use client";

import { useState, type FormEvent } from "react";

const workoutPlans = {
  Beginner: [
    { day: "MONDAY", name: "Full Body", exercises: "Squats · Push-ups · Plank" },
    { day: "WEDNESDAY", name: "Upper Body", exercises: "Chest · Back · Shoulders" },
    { day: "FRIDAY", name: "Lower Body", exercises: "Legs · Glutes · Core" },
  ],
  Intermediate: [
    { day: "MONDAY", name: "Chest & Triceps", exercises: "Bench Press · Dips · Extensions" },
    { day: "WEDNESDAY", name: "Back & Biceps", exercises: "Rows · Pulldowns · Curls" },
    { day: "FRIDAY", name: "Legs & Shoulders", exercises: "Squats · Lunges · Presses" },
  ],
  Advanced: [
    { day: "MONDAY", name: "Push Day", exercises: "Chest · Shoulders · Triceps" },
    { day: "WEDNESDAY", name: "Pull Day", exercises: "Back · Rear Delts · Biceps" },
    { day: "FRIDAY", name: "Leg Day", exercises: "Quads · Hamstrings · Calves" },
  ],
};

type Level = keyof typeof workoutPlans;

const memberships = [
  {
    name: "BASIC",
    price: "499",
    features: ["Gym access", "Locker room", "Basic workout plans"],
  },
  {
    name: "PRO",
    price: "799",
    popular: true,
    features: ["Everything in Basic", "Personalized workout plan", "Group classes"],
  },
  {
    name: "ELITE",
    price: "1,199",
    features: ["Everything in Pro", "Personal training sessions", "Priority support"],
  },
];

export default function Home() {
  const [level, setLevel] = useState<Level>("Beginner");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiError, setBmiError] = useState("");

  function calculateBMI(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (!h || !w || h < 50 || h > 250 || w < 2 || w > 500) {
      setBmi(null);
      setBmiError("Please enter a valid height and weight.");
      return;
    }

    setBmiError("");
    setBmi(Number((w / ((h / 100) ** 2)).toFixed(1)));
  }

  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">IRON<span>CORE.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#workouts">Workouts</a>
          <a href="#membership">Membership</a>
          <a href="#bmi">BMI Calculator</a>
        </div>

        <a className="nav-cta" href="#membership">JOIN NOW ↗</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
          <h1>BUILD YOUR<br /><span>STRONGER</span><br />SELF.</h1>
          <p className="hero-text">
            No shortcuts. No excuses. Just you, your goals, and the work
            that gets you there.
          </p>

          <div className="hero-actions">
            <a href="#workouts" className="btn-primary">EXPLORE WORKOUTS ↗</a>
            <a href="#membership" className="btn-outline">OUR MEMBERSHIPS</a>
          </div>

          <p className="hero-note">
            <span className="live-dot" />
            YOUR POTENTIAL HAS NO LIMITS
          </p>
        </div>

        <div className="hero-index"><span>01</span> / TRAIN DIFFERENT</div>
      </section>

      <section className="stats">
        <div><strong>01</strong><span>SET YOUR GOAL</span></div>
        <div><strong>02</strong><span>BUILD YOUR PLAN</span></div>
        <div><strong>03</strong><span>SHOW UP & GROW</span></div>
        <div><strong>04</strong><span>OWN YOUR PROGRESS</span></div>
      </section>

      <section className="section" id="workouts">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TRAIN WITH PURPOSE</p>
            <h2>YOUR WORKOUT.<br /><span>YOUR RULES.</span></h2>
          </div>
          <p className="section-description">
            Choose your experience level and find a routine that suits your goals.
          </p>
        </div>

        <div className="level-tabs">
          {(Object.keys(workoutPlans) as Level[]).map((item) => (
            <button
              key={item}
              onClick={() => setLevel(item)}
              className={level === item ? "level-tab active" : "level-tab"}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="workout-grid">
          {workoutPlans[level].map((plan, index) => (
            <article className="workout-card" key={plan.day}>
              <div className="workout-number">0{index + 1}</div>
              <p className="workout-day">{plan.day} / TRAINING DAY</p>
              <h3>{plan.name}</h3>
              <p className="workout-detail">{plan.exercises}</p>
              <div className="workout-bottom">
                <span>{level.toUpperCase()}</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

        <p className="small-note">
          Start at a comfortable level, learn proper technique, and allow
          enough time for rest and recovery.
        </p>
      </section>

      <section className="feature">
        <div className="feature-image" />
        <div className="feature-content">
          <p className="eyebrow">MORE THAN A GYM</p>
          <h2>DISCIPLINE<br />BUILDS <span>RESULTS.</span></h2>
          <p>
            Build healthy habits, learn new skills, and make progress
            one session at a time.
          </p>
          <a href="#membership" className="btn-primary">FIND YOUR PLAN ↗</a>
        </div>
      </section>

      <section className="section" id="membership">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SIMPLE. FLEXIBLE. EFFECTIVE.</p>
            <h2>CHOOSE YOUR<br /><span>MEMBERSHIP.</span></h2>
          </div>
          <p className="section-description">
            Explore these sample membership plans and choose your preferred option.
          </p>
        </div>

        <div className="pricing-grid">
          {memberships.map((plan) => (
            <article
              key={plan.name}
              className={plan.popular ? "price-card featured" : "price-card"}
            >
              {plan.popular && <div className="popular-label">MOST POPULAR</div>}
              <p className="price-name">{plan.name}</p>
              <h3><span>EGP</span> {plan.price}<small> / month</small></h3>
              <div className="price-divider" />

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span>✓</span> {feature}</li>
                ))}
              </ul>

              <a
                href={`mailto:hello@example.com?subject=${encodeURIComponent(plan.name + " membership")}`}
                className={plan.popular ? "btn-primary price-btn" : "btn-outline price-btn"}
              >
                CHOOSE PLAN ↗
              </a>
            </article>
          ))}
        </div>

        <p className="small-note">
          Demo prices only. Replace them with your actual gym membership prices.
        </p>
      </section>

      <section className="bmi-section" id="bmi">
        <div className="bmi-copy">
          <p className="eyebrow">KNOW YOUR NUMBERS</p>
          <h2>YOUR BODY.<br /><span>YOUR PROGRESS.</span></h2>
          <p>
            Enter your height and weight to calculate BMI. For children and
            teenagers, BMI must be interpreted using age-specific growth charts.
          </p>
        </div>

        <form className="bmi-card" onSubmit={calculateBMI}>
          <label htmlFor="height">HEIGHT (CM)</label>
          <input
            id="height"
            type="number"
            min="50"
            max="250"
            placeholder="Enter height in cm"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            required
          />

          <label htmlFor="weight">WEIGHT (KG)</label>
          <input
            id="weight"
            type="number"
            min="2"
            max="500"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            required
          />

          <button type="submit" className="btn-primary bmi-button">
            CALCULATE BMI ↗
          </button>

          {bmiError && <p className="bmi-error">{bmiError}</p>}

          {bmi !== null && (
            <div className="bmi-result" aria-live="polite">
              <strong>{bmi}</strong>
              <p>Your calculated BMI</p>
              <small>
                BMI alone cannot determine your health or fitness. If you are
                a teenager, use an age-appropriate assessment with a healthcare
                professional.
              </small>
            </div>
          )}
        </form>
      </section>

      <section className="final-cta">
        <p className="eyebrow">THE NEXT STEP IS YOURS</p>
        <h2>READY TO GET<br /><span>STARTED?</span></h2>
        <a href="#workouts" className="btn-primary">FIND YOUR WORKOUT ↗</a>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">IRON<span>CORE.</span></a>
        <p>TRAIN SMART. STAY CONSISTENT.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <p className="copyright">
          © {new Date().getFullYear()} IRONCORE FITNESS. DEMO WEBSITE.
        </p>
      </footer>
    </main>
  );
}
