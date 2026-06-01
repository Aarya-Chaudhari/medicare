# MediCare Diagnostics - Setup & Development Guide

## Project Overview

This is a complete, production-ready healthcare diagnostic website built with Next.js 15, TypeScript, and Tailwind CSS. It includes 40+ pages, comprehensive components, mock data, and is ready for backend integration.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- A code editor (VS Code recommended)

### Installation Steps

1. **Navigate to project directory**
   ```bash
   cd e:\testlab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:3000`
   - You'll see the home page with all services

## Development Workflow

### Running the Project
```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Pages Available

### Main Pages (Publicly Available)
- `/` - Home page with hero, services, tests, packages, testimonials
- `/tests` - Browse all diagnostic tests
- `/tests/[testId]` - Individual test details
- `/packages` - Health packages listing
- `/appointment` - Book appointment
- `/home-collection` - Request home collection
- `/about` - About MediCare Diagnostics
- `/branches` - Lab branch locations
- `/doctors` - Our expert doctors
- `/contact` - Contact information
- `/blog` - Health blog posts
- `/blog/[slug]` - Individual blog articles

### Service Pages
- `/faq` - Frequently asked questions
- `/testimonials` - Patient reviews
- `/insurance` - Insurance partners
- `/corporate` - Corporate health services
- `/franchise` - Franchise opportunities
- `/careers` - Job openings
- `/track-sample` - Track test samples
- `/download-reports` - Access reports (login required)

### Legal Pages
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions
- `/refund` - Refund policy

## Key Features

### 1. Comprehensive Test Catalog
- 20+ diagnostic tests
- Detailed test information
- Fasting requirements
- Sample type details
- Report turnaround time

### 2. Health Packages
- 7 customized packages
- Discount management
- Package comparison
- Test inclusion details

### 3. Appointment System
- Easy booking
- Multiple collection options
- Date/time selection
- Form validation

### 4. Home Collection
- Professional phlebotomists
- Multiple test selection
- Convenient scheduling
- Safety assurance

### 5. Blog System
- Health articles
- Categories
- Read time estimation
- Related articles

## Data Management

### Mock Data Structure
All mock data is in `src/data/mock-data.ts`:
- Tests and packages
- Branch information
- Doctor profiles
- Testimonials
- Blog posts
- Insurance partners

### Data Persistence
- Contact form submissions → localStorage (contacts)
- Appointments → localStorage (appointments)
- Home collection requests → localStorage (homeCollections)
- Access via browser DevTools → Application → Local Storage

## Component Structure

### Layout Components
- `Navbar` - Navigation bar
- `Footer` - Footer section
- `Hero` - Hero banner

### Card Components
- `TestCard` - Display tests
- `PackageCard` - Display packages
- `DoctorCard` - Doctor profiles
- `BlogCard` - Blog posts
- `BranchCard` - Branch info
- `TestimonialCard` - Reviews
- `ServiceCard` - Services
- `StatCard` - Statistics

### Form Components
- `ContactForm` - Contact submission
- `AppointmentForm` - Appointment booking
- `HomeCollectionForm` - Home collection request

### Utility Components
- `Search` - Search functionality
- `Pagination` - Page navigation
- `FaqItem` - FAQ accordion

## Customization Guide

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0066cc',    // Main brand color
  secondary: '#00a3e0',  // Secondary color
  accent: '#ff6b35',     // Accent color
}
```

### Add New Test
Edit `src/data/mock-data.ts` - tests array:
```typescript
{
  id: 'test-id',
  name: 'Test Name',
  price: 599,
  description: 'Description',
  duration: '2-3 hours',
  fasting: false,
  sample: 'Blood',
  preparation: ['Instruction 1', 'Instruction 2'],
  reportTime: '24 hours',
  category: 'Hematology',
}
```

### Add New Blog Post
Edit `src/data/mock-data.ts` - blogPosts array:
```typescript
{
  id: '6',
  title: 'Article Title',
  slug: 'article-title',
  excerpt: 'Short description',
  content: 'Full article content...',
  author: 'Dr. Name',
  date: '2024-01-20',
  category: 'Health Tips',
  image: '📝',
  readTime: 5,
}
```

## Form Handling

### Contact Form
- Stored in localStorage (key: 'contacts')
- Fields: name, email, phone, subject, message
- Auto-confirmation message

### Appointment Form
- Stored in localStorage (key: 'appointments')
- Test selection from available tests
- Date/time validation
- Collection type selection

### Home Collection Form
- Stored in localStorage (key: 'homeCollections')
- Multiple test selection
- Address details
- Time slot selection

## SEO Optimization

### Metadata
- Title and description on each page
- Open Graph tags
- Keywords
- Mobile viewport

### Dynamic Routes
- Tests: `/tests/[testId]`
- Blog: `/blog/[slug]`
- Auto-generated static params

## Performance Tips

1. **Optimize Images**: Replace emoji icons with actual images
2. **Lazy Loading**: Components load on scroll
3. **Code Splitting**: Automatic with Next.js
4. **CSS Optimization**: Tailwind tree-shaking enabled

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## Backend Integration

### Ready for API Integration
1. Replace localStorage with API calls
2. Update form submissions to POST requests
3. Add authentication
4. Connect to database

### API Endpoints Example
```
GET /api/tests
GET /api/tests/:id
GET /api/packages
POST /api/appointments
POST /api/home-collection
POST /api/contact
GET /api/blog
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

### Build Issues
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
- Ensure `tsconfig.json` is configured
- Check `src/types/index.ts` for type definitions
- Run `npm run lint` to check

## Environment Variables

Create `.env.local` for sensitive data:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MediCare Diagnostics
```

## Testing

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works on desktop and mobile
- [ ] Forms submit and store data
- [ ] Search/filter functionality works
- [ ] Links are not broken
- [ ] Images load correctly
- [ ] Responsive design on various screens

## Security Best Practices

1. Validate all form inputs
2. Sanitize data before storage
3. Use HTTPS in production
4. Implement CSRF protection
5. Set appropriate headers
6. Regular security updates

## Support & Documentation

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

### Contact
- Email: support@medicarediagnostics.in
- Phone: +91 98765 43210

---

**Happy developing! 🚀**

For questions or issues, refer to the documentation or contact support.
