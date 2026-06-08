# Codeforces Wrapup

Get a concise overview of any Codeforces user—profile picture, ratings, ranks, contributions, and friends—by simply entering their username.

**Live Demo:** [codeforces-wrapup.vercel.app](https://codeforces-wrapup.vercel.app)

## Features

- 🔍 **User Search** - Look up any Codeforces user by username
- 📊 **Comprehensive Profile Overview** - View ratings, ranks, and contribution statistics
- 👥 **Friends Network** - See the list of friends a user has
- 🖼️ **Profile Picture** - Display user avatars
- ⚡ **Fast & Responsive** - Built with Next.js for optimal performance
- 🎨 **Modern UI** - Clean interface with Tailwind CSS

## Tech Stack

- **Frontend Framework:** Next.js
- **Styling:** Tailwind CSS
- **Language:** JavaScript
- **Package Manager:** npm
- **Code Quality:** ESLint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vivan-1045/codeforces-wrapup.git
cd codeforces-wrapup
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
codeforces-wrapup/
├── app/              # Next.js app directory
├── components/       # React components
├── pages/           # Page routes
├── lib/             # Utility functions
├── public/          # Static assets
├── styles/          # Global styles
├── package.json     # Dependencies and scripts
├── tailwind.config.mjs   # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── postcss.config.mjs    # PostCSS configuration
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## How to Use

1. Visit the application
2. Enter a Codeforces username in the search box
3. Click search or press Enter
4. View the user's profile information including:
   - Profile picture
   - Current and maximum ratings
   - Current and maximum ranks
   - Contribution statistics
   - Friends list

## API Integration

This project integrates with the [Codeforces API](https://codeforces.com/api/help) to fetch user data.

## Contributing

Contributions are welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Suggest enhancements

## License

This project is open source and available under the MIT License.

## Author

Created by [Vivan-1045](https://github.com/Vivan-1045)

## Support

If you encounter any issues or have questions, please open an [issue](https://github.com/Vivan-1045/codeforces-wrapup/issues) on GitHub.
