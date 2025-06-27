
# 🚀 Robo‑Advisor Frontend

A modern React-based frontend for a Robo‑Advisor platform. It provides an interactive and user-friendly experience for users to plan goals, build and manage portfolios, and track investment performance.

🌐 **Live Site**: [robo-advisor-frontend.netlify.app](https://robo-advisor-frontend.netlify.app)

---

## ✨ Features

- ✅ **Responsive UI**: Adapts smoothly to all screen sizes
- 🔐 **User Authentication**: Sign up and login functionality
- 📊 **Portfolio Overview**: Recommended asset allocation
- 📈 **Dynamic Charts**: Track and visualize performance metrics
- ⚙️ **API Integration**: Communicates with a backend server for data
- 🌗 **Dark/Light Mode**: Follows system preference
- 🧾 **Form Validation**: Step-by-step onboarding flow with validations

---

## 🛠️ Tech Stack

| Category          | Tools / Libraries                              |
|-------------------|-------------------------------------------------|
| Framework         | React                                           |
| Routing           | React Router DOM                                |
| State Management  | Context API             |
| Styling           | Tailwind CSS |
| Charts            | Recharts                             |
| HTTP Requests     | Axios                              |
| Forms             | React Hook Form                  |
| Environment       | `.env.local` for config                         |
| Dev Tools         | ESLint, Prettier             |

---

## ⚙️ Getting Started

### 📦 Prerequisites

- Node.js >= 14.x
- npm or yarn
- Optional: Netlify CLI for local Netlify preview

### 🔧 Installation

```bash
git clone https://github.com/Tonyrealzy/Robo-Advisor-React-Frontend.git
cd robo-advisor-react-frontend
npm install
# or
yarn install
```

### 🌍 Environment Setup

Create a `.env.local` file using the provided `.env.example`:

```
REACT_APP_BASE_URL=https://robo-advisor-backend-service.onrender.com
REACT_APP_NODE_ENV=development
```

---

## 🧪 Available Scripts

| Script             | Description                          |
|--------------------|--------------------------------------|
| `npm start`         | Runs the app in development mode     |
| `npm run build`     | Builds for production                |
| `npm test`          | Runs unit tests                      |
| `npm run lint`      | Lints code using ESLint              |
| `npm run format`    | Formats code using Prettier          |

---

## 📁 Project Structure

```
robo-advisor-frontend/
├── public/               # Static assets
├── src/
│   ├── api/              # API calls
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI elements
│   ├── context/          # App-wide state
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Route-based components
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   ├── App.tsx
│   └── index.tsx
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
└── package.json
```

---

## 🧑‍💻 Usage

1. **Sign Up / Log In** – Users register and authenticate securely.
2. **Goal Planning** – Define investment goals and timelines.
3. **Portfolio Insights** – View recommended allocations based on risk appetite.
4. **Dashboard** – Monitor and interact with portfolio performance data.

---

## 🚀 Deployment (Netlify)

Deployed automatically to [Netlify](https://netlify.com):

- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Continuous Deployment**: Auto-deploy on push to `main`

For local Netlify testing:

```bash
npm install -g netlify-cli
netlify dev
```

---

## 🧪 Testing

```bash
npm test
npm test -- --coverage
```

- Tests built with Jest and React Testing Library
- Add more test cases in the `__tests__` folder

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more info.

---

## 👨‍💼 Maintainer

**Your Name**  
[GitHub](https://github.com/Tonyrealzy)

---

## 🙏 Acknowledgments

- React community for the amazing ecosystem  
- Netlify for free hosting  
- Open source libraries and tools that make development faster
