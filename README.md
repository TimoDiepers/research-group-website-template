# Research Group Website Template

A modern, responsive website template for academic research groups built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design with dark mode support and smooth animations.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🎭 Smooth animations using Motion
- 🧭 Client-side routing with React Router
- 📊 Easy content management through TypeScript data files
- ♿ Accessible components

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Installation

1. Clone or download this repository:
```bash
git clone https://github.com/TimoDiepers/research-group-website-template.git
cd research-group-website-template
```

2. Install dependencies:
```bash
npm install
```

## Customizing Content

All content is managed through TypeScript files in the `src/data/` directory. Edit these files to customize your research group's information:

### 1. Team Members (`src/data/team.ts`)

Edit the `faculty`, `researchers`, and `staff` arrays to add or modify team members:

```typescript
export const faculty: TeamMember[] = [
  {
    name: 'Your Name',
    role: 'Your Role',
    focus: 'Your research focus',
    tags: ['Your Tag'],
    avatar: '/path/to/avatar.jpg', // Optional
  },
]
```

### 2. Research Areas (`src/data/research.ts`)

Modify the `researchAreas` array to showcase your research:

```typescript
export const researchAreas: ResearchArea[] = [
  {
    slug: 'your-area',
    title: 'Your Research Area',
    tagline: 'Brief tagline',
    summary: 'Detailed summary...',
    highlights: ['Highlight 1', 'Highlight 2'],
    collaborators: ['Partner 1', 'Partner 2'],
    featuredProjects: [
      {
        name: 'Project Name',
        description: 'Project description',
        link: 'https://...', // Optional
      },
    ],
  },
]
```

### 3. Teaching & Outreach (`src/data/teaching.ts`)

Update the `courses` and `outreach` arrays:

```typescript
export const courses: Course[] = [
  {
    code: 'CS 101',
    title: 'Course Title',
    description: 'Course description',
    offerings: ['Fall 2025'],
    audience: 'Target audience',
    highlights: ['Feature 1', 'Feature 2'],
  },
]
```

### 4. Homepage Content (`src/pages/HomePage.tsx`)

Edit the stats and updates directly in the HomePage component:

- `stats` array (lines 11-15): Update statistics
- `updates` array (lines 17-30): Add news and announcements

### 5. Images and Assets

Place images in the `public/` directory:
- Add team member avatars: `public/team/`
- Add logos or images: `public/images/`
- Reference them in your data files with paths like `/team/avatar.jpg`

## Development Workflow

### Start Development Server

Run the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/` (or another port if 5173 is busy).

### Lint Code

Check for code quality issues:

```bash
npm run lint
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel offers free hosting with automatic deployments:

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via Vercel CLI**:
   ```bash
   vercel
   ```

4. **Or connect your Git repository**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

5. **Vercel Configuration** (automatic, but for reference):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Framework Preset**: Vite

### Deploy to Netlify

1. **Sign up** at [netlify.com](https://netlify.com)

2. **Create a `netlify.toml` file** in the root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy via Netlify CLI** or connect your Git repository through the Netlify dashboard.

### Deploy to Custom Server (VPS, AWS, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Transfer files**: Upload the contents of the `dist/` directory to your web server.

3. **Web Server Configuration**:

   **For Nginx**, add this to your site configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

   **For Apache**, create a `.htaccess` file in the `dist/` directory:
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Restart your web server**:
   ```bash
   # Nginx
   sudo systemctl restart nginx
   
   # Apache
   sudo systemctl restart apache2
   ```

### Deploy with Docker

1. **Create a `Dockerfile`** in the root:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create `nginx.conf`**:
   ```nginx
   server {
       listen 80;
       server_name localhost;
       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Build and run**:
   ```bash
   docker build -t research-website .
   docker run -p 80:80 research-website
   ```

## Configuration

### Base URL

If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... rest of config
})
```

### Environment Variables

Create a `.env` file in the root for environment-specific settings:

```env
VITE_SITE_TITLE=Your Research Group
VITE_API_URL=https://api.example.com
```

Access them in your code:
```typescript
const title = import.meta.env.VITE_SITE_TITLE
```

### Routing

Pages are defined in `src/App.tsx`. To add new pages:

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component styles: Use Tailwind classes or CSS modules

## Project Structure

```
research-group-website-template/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   ├── theme/       # Theme components
│   │   └── ui/          # UI components (shadcn/ui)
│   ├── data/            # Content data files
│   │   ├── research.ts  # Research areas
│   │   ├── team.ts      # Team members
│   │   └── teaching.ts  # Courses and outreach
│   ├── lib/             # Utilities
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Troubleshooting

### Port already in use

If port 5173 is busy, Vite will automatically try the next available port. You can specify a port:

```bash
npm run dev -- --port 3000
```

### Build fails

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing issues after deployment

Ensure your server is configured to redirect all requests to `index.html` (see deployment sections above).

## Support

For issues or questions:
- Check existing [GitHub Issues](https://github.com/TimoDiepers/research-group-website-template/issues)
- Create a new issue with details about your problem

## License

[Add your license information here]

## Acknowledgments

Built with:
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Motion](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
