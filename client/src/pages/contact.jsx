import { useMemo, useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    comment: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validate(values), [values]);

  const onChange = (e) => {
    setSubmitted(false);
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    
    setTouched({ name: true, email: true, comment: true });

    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) return;

    setSubmitted(true);
    setValues({ name: "", email: "", comment: "" });
    setTouched({ name: false, email: false, comment: false });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <div className="w-full px-6 md:px-10 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] text-neutral-500">CONTACT</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Let's talk.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Questions about the collection, collabs, or your order experience?
            Send a note we'll get back to you soon.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="p-7 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Your name"
                  className={[
                    "mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition",
                    showError("name")
                      ? "border-red-400 focus:border-red-500"
                      : "border-black/10 focus:border-black/30",
                  ].join(" ")}
                />
                {showError("name") && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="you@email.com"
                  className={[
                    "mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition",
                    showError("email")
                      ? "border-red-400 focus:border-red-500"
                      : "border-black/10 focus:border-black/30",
                  ].join(" ")}
                />
                {showError("email") && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-medium">Comment</label>
                <textarea
                  name="comment"
                  value={values.comment}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="How can we help?"
                  rows={6}
                  className={[
                    "mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition resize-none",
                    showError("comment")
                      ? "border-red-400 focus:border-red-500"
                      : "border-black/10 focus:border-black/30",
                  ].join(" ")}
                />
                {showError("comment") && (
                  <p className="mt-2 text-sm text-red-600">{errors.comment}</p>
                )}
              </div>

              {/* Submit row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Send Message
                </button>

                <p className="text-xs text-neutral-500">
                  This is a portfolio demo form (no email is sent).
                </p>
              </div>

              {/* Success state */}
              {submitted && (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                  <p className="text-sm text-emerald-800 font-medium">
                    Message sent!
                  </p>
                  <p className="text-sm text-emerald-700 mt-1">
                    Thanks for reaching out we'll respond soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>


        <div className="mt-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Blush &amp; Britt — glow responsibly ✨
        </div>
      </div>
    </div>
  );
}

/* -------- validation helper -------- */
function validate(values) {
  const e = { name: "", email: "", comment: "" };

  if (!values.name.trim()) {
    e.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    e.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    e.email = "Please enter your email.";
  } else if (!isValidEmail(values.email.trim())) {
    e.email = "Please enter a valid email address.";
  }

  if (!values.comment.trim()) {
    e.comment = "Please add a short message.";
  } else if (values.comment.trim().length < 10) {
    e.comment = "Message should be at least 10 characters.";
  }

  return e;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
