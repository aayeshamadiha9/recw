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
              src="/images/Principal.jpg" // placeholder for female executive or leader, wait, Dr. KE Sreenivasa Murthy is male. Let's use a male professional placeholder.
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
        {/* Message Content */}
        <div>
          <h2
            style={{
              fontSize: "2.25rem",
              marginBottom: "1.5rem",
              color: "var(--primary-blue)",
            }}
          >
            Message from the Principal's Desk
          </h2>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            It gives me immense pleasure to welcome you to Ravindra College of
            Engineering for Women. You are entering higher education at a
            remarkable time when technology is transforming every aspect of
            human life. As aspiring engineers, you have the opportunity to
            become creators of this future rather than mere spectators.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            At our institution, we are committed to nurturing technically
            competent, ethically responsible, and globally competitive
            engineers. Our objective extends beyond imparting academic
            knowledge; we strive to develop problem solvers, innovators,
            researchers, entrepreneurs, and leaders capable of addressing
            real-world challenges and contributing meaningfully to society.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            The college provides a vibrant learning ecosystem supported by
            highly qualified and dedicated faculty members, modern laboratories,
            industry collaborations, research facilities, innovation centers,
            and digital learning resources. Our focus is on preparing graduates
            who are not only employable but also capable of creating employment
            opportunities through innovation and entrepreneurship.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            We firmly believe that education is a partnership among students,
            parents, faculty, and the institution. Therefore, we maintain
            continuous interaction with parents and mentors to ensure the
            holistic development, well-being, and academic success of every
            student. We are committed to providing a safe, inclusive,
            supportive, and intellectually stimulating environment where every
            student can learn, grow, and excel.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            The four years you spend on our campus will be a transformative
            journey of learning, discovery, innovation, and personal growth. I
            encourage you to dream big, work hard, embrace challenges, and
            pursue excellence in everything you do. Let curiosity drive your
            learning, innovation shape your thinking, and integrity guide your
            actions.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            As you embark on this exciting journey, remember that engineering is
            not merely a profession—it is a responsibility to create solutions
            that improve lives and build a better world. The future belongs to
            those who are willing to learn, innovate, and lead.
          </p>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
            I wish you a rewarding academic journey and a future filled with
            success, achievement, and fulfillment.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "var(--gold-dark)",
              marginTop: "1.5rem",
            }}
          >
            Wish you all Success!
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
