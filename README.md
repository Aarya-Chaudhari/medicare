# MediCare Diagnostics - Healthcare Diagnostic Website

A modern, production-ready Next.js healthcare diagnostic website built with TypeScript, Tailwind CSS, and featuring 40+ pages with comprehensive functionality.

## Features

### 🏥 Core Services
- **Medical Tests**: 20+ diagnostic tests with detailed information
- **Health Packages**: Customized health packages for different needs
- **Home Collection**: Professional phlebotomists for home sample collection
- **Online Appointments**: Easy appointment booking system
- **Test Tracking**: Real-time sample tracking
- **Digital Reports**: Secure online report access and downloads

### 📄 Pages (40+)
- **Main Pages**: Home, About, Contact, Branches, Doctors, Services
- **Test Pages**: Tests listing, individual test details, test categories
- **Package Pages**: Packages listing, package details, comparison
- **Booking Pages**: Appointment booking, home collection, track sample
- **Health Pages**: Blog with health articles, testimonials, FAQ
- **Business Pages**: Insurance partners, corporate services, franchise opportunities
- **Career Pages**: Careers, job listings
- **Account Pages**: Download reports, user dashboard
- **Legal Pages**: Privacy policy, terms & conditions, refund policy

### 🎨 UI/UX Features
- Responsive design for all devices
- Modern gradient UI with animations
- Smooth scrolling and transitions
- Mobile-optimized navigation
- Accessible forms and buttons
- Product cards with hover effects
- Search and filtering capabilities
- Pagination for large lists

### 🔧 Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Data**: Mock data with localStorage support
- **Forms**: Contact, Appointment, Home Collection forms
- **API**: Ready for backend integration

### 📊 Mock Data Included
- 20+ diagnostic tests with full details
- 7 health packages
- 5 laboratory branches
- 6 experienced doctors
- Health blog posts
- Patient testimonials
- Insurance partners
- Services and features

### 💾 Data Persistence
- Local storage for form submissions
- Appointments and home collection requests
- Contact form submissions
- All data viewable in admin dashboard

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd testlab

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js pages and routes
│   ├── components/       # Reusable React components
│   ├── data/            # Mock data
│   ├── lib/             # Utilities and configuration
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Key Components

### Layout Components
- `Navbar` - Sticky navigation with mobile menu
- `Footer` - Multi-section footer with links
- `Hero` - Hero section with CTA

### Card Components
- `TestCard` - Test listing card
- `PackageCard` - Health package card
- `DoctorCard` - Doctor profile card
- `BlogCard` - Blog post card
- `BranchCard` - Branch information card
- `TestimonialCard` - Patient review card
- `ServiceCard` - Service card
- `StatCard` - Statistics card

### Form Components
- `ContactForm` - Contact form with validation
- `AppointmentForm` - Appointment booking form
- `HomeCollectionForm` - Home collection request form

### Utility Components
- `Search` - Search bar with filtering
- `Pagination` - Pagination controls
- `FaqItem` - FAQ accordion item

## Usage Examples

### Booking an Appointment
1. Click "Book Appointment" button
2. Fill in patient details
3. Select test and preferred date/time
4. Submit form
5. Get confirmation

### Requesting Home Collection
1. Navigate to "Home Collection" page
2. Fill in address and test selection
3. Choose preferred date and time
4. Submit request
5. Professional will contact you

### Downloading Reports
1. Go to "Download Reports"
2. Login with email and password
3. View all available reports
4. Download as PDF

## Customization

### Add New Test
Edit `src/data/mock-data.ts`:
```typescript
tests.push({
  id: 'newtest',
  name: 'New Test Name',
  price: 999,
  description: 'Test description',
  // ... other fields
});
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // ...
}
```

### Add New Page
1. Create new folder in `src/app`
2. Create `page.tsx` file
3. Add route to navbar if needed

## API Integration Ready

The project is structured for easy backend integration:
- Remove mock data and replace with API calls
- Update form submissions to POST requests
- Add authentication system
- Implement payment gateway
- Connect to real database

## SEO Features
- Meta tags for all pages
- Open Graph tags
- Semantic HTML
- Mobile-friendly design
- Fast loading times

## Performance Optimizations
- Image optimization ready
- Code splitting with Next.js
- Tailwind CSS optimization
- Minified CSS and JavaScript
- Fast page loads

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License
This project is provided as-is for healthcare diagnostic services.

## Support
For questions or issues, please contact: support@medicarediagnostics.in

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
