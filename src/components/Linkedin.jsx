import React from 'react'

const Linkedin = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7  hover:rotate-45 hover:scale-110 transition duration-300 ease-in-out"
    fill="currentColor"
    style={{ color: "#0077b5" }}
    viewBox="0 0 24 24"
    onClick={() => window.open("https://www.linkedin.com/in/deckerjan", "_blank")}
                role="button"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
  )
}

export default Linkedin