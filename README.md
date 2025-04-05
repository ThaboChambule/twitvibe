# TwitVibe Social

A modern, feature-rich social media platform inspired by Twitter, built with cutting-edge web technologies.


## 🚀 Features

- **Real-time Updates**: Instantly see new posts, comments, and notifications
- **Interactive UI**: Smooth, intuitive interface with dynamic components
- **Theme Switching**: Toggle between dark and light modes for comfortable viewing
- **Infinite Scrolling**: Seamlessly browse content without pagination
- **User Authentication**: Secure signup, login, and profile management
- **Media Sharing**: Upload and share images, videos, and other media
- **Responsive Design**: Optimized for all devices from mobile to desktop

## 💻 Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js
- **Real-time Communication**: Socket.io
- **State Management**: React Context API
- **Deployment**: Vercel

## 📝 Getting Started

### Prerequisites

- Node.js 16+ and pnpm
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/twitvibe-social.git
   cd twitvibe-social
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```
   DATABASE_URL="your_mongodb_connection_string"
   NEXTAUTH_SECRET="your_auth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   # Add other required variables
   ```

4. Set up the database
   ```bash
   pnpm prisma db push
   ```

5. Run the development server
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## 🧪 Testing

```bash
pnpm test
```

## 📚 Project Structure

```
/
├── components/        # React components
├── contexts/          # React contexts for state management
├── lib/               # Utility functions and shared logic
├── pages/             # Next.js pages and API routes
├── prisma/            # Database schema and migrations
├── public/            # Static assets
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## 🌟 Key Features Explained

### Real-time Communication

TwitVibe uses Socket.io to provide real-time updates without page refreshes. Users receive instant notifications for new posts, comments, likes, and mentions.

### Authentication System

The platform leverages NextAuth.js to provide secure authentication with support for:
- Email/password login
- OAuth providers (Google, GitHub)
- Password recovery
- Account verification

### Media Management

Users can upload and share various media types:
- Images with preview
- Videos with custom player
- GIFs and other content

### Infinite Scrolling

Content is loaded dynamically as users scroll, providing a seamless browsing experience while optimizing performance by limiting initial data transfer.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Thabo Chambule
