import React from "react";

export default function PrincipalMessage() {
  return (
    <div style={{ paddingBottom: "5rem" }}>
      {/* Banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))",
          color: "var(--white)",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              color: "var(--white)",
              fontSize: "3rem",
              fontFamily: "var(--font-serif)",
              marginBottom: "1rem",
            }}
          >
            Principal's Message
          </h1>
          <p
            style={{
              color: "var(--gold-light)",
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            A welcoming message from the head of the institution, Dr.N
            Sreekanth.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div
        className="container"
        style={{
          marginTop: "5rem",
          display: "grid",
          gridTemplateColumns: "1fr 2.5fr",
          gap: "4rem",
          alignItems: "flex-start",
        }}
      >
        {/* Principal Portrait Card */}
        <div
          className="card-glass"
          style={{
            borderTop: "4px solid var(--gold)",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 1.5rem",
              border: "4px solid var(--gold)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src='/images/principal.jpg' // placeholder for female executive or leader, wait, Dr. KE Sreenivasa Murthy is male. Let's use a male professional placeholder.
              alt="Dr. N Sreekanth"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h3
            style={{
              fontSize: "1.25rem",
              color: "var(--primary-blue)",
              margin: "0 0 0.25rem",
            }}
          >
            Dr. N Sreekanth
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--gold-dark)",
              fontWeight: "700",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Principal.
          </p>
          <div
            style={{
              borderTop: "1px solid var(--slate-200)",
              paddingTop: "1rem",
              fontSize: "0.85rem",
              color: "var(--slate-700)",
            }}
          >
            <strong>Email:</strong> principal@recw.ac.in
            <br />
            <strong>Office:</strong> +91 8518-285088
          </div>
        </div>

        {/* Message Content */}
        <div>
          <h2
            style={{
              fontSize: "2.25rem",
              marginBottom: "1.5rem",
              color: "var(--primary-blue)",
            }}
          >
            Dear Students and Parents,
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            It gives me immense pleasure to welcome you to Ravindra College of
            Engineering for Women (Autonomous), Kurnool. In today's highly
            competitive, technology-driven global arena, engineering education
            is undergoing rapid transformations. As an institution exclusively
            dedicated to women, we understand the critical role we play in
            nurturing competent, self-assured women technocrats who will drive
            the future.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            Conferred with the prestigious{" "}
            <strong>Autonomous status by the UGC</strong> and accredited by{" "}
            <strong>NAAC with an A+ Grade</strong>, RCEW has designed an
            ecosystem where academic rigors are balanced with practical
            application, project-based learning, and active industry
            collaboration. Our B.Tech programs in Computer Science & Engineering
            (CSE) and Electronics & Communication Engineering (ECE) are
            accredited by the <strong>NBA</strong>, which bears testimony to our
            standard of education.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            We place paramount emphasis on the holistic development of our
            students. Apart from academic excellence, our training and placement
            cell works round-the-clock to build coding skills, technical
            expertise, and leadership capabilities. As a result, our students
            are recruited by tier-1 MNCs like TCS, Wipro, Cognizant, and
            Accenture, with packages reaching up to 12 LPA.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            I encourage all students to make full use of our campus amenities,
            modern labs, digital library resources, and incubation cell.
            Together, let us embark on an academic journey filled with learning,
            innovation, and achievements.
          </p>

          <div style={{ marginTop: "3rem", textAlign: "right" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--primary-blue)",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              Dr. N Sreekanth
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                color: "var(--gold-dark)",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Principal, Ravindra College of Engineering for Women
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
