# Multi-Client React Website

A React + Vite static website that supports multiple clients from a single deployment. Each client has their own:
- Business name
- Logo / banner
- Color theme
- Products / prices
- Messenger checkout link
- Contact information

## URL Structure

```
https://yoursite.com/                    → Default client (hometownbrew)
https://yoursite.com/hometownbrew       → Hometown Brew
https://yoursite.com/hometownbrew/menu  → Hometown Brew Menu
https://yoursite.com/milkteashop        → Milk Tea Shop
https://yoursite.com/milkteashop/menu   → Milk Tea Shop Menu
https://yoursite.com/projectbrew        → Project Brew
https://yoursite.com/projectbrew/menu   → Project Brew Menu
```

## Folder Structure

```
src/
├── data/
│   └── clients.js              ← Client configurations (add new clients here)
├── context/
│   ├── ClientContext.jsx       ← Client detection & data provider
│   └── CartContext.jsx         ← Shopping cart (existing)
├── components/
│   ├── Navbar.jsx              ← Dynamic logo & navigation
│   ├── Footer.jsx
│   └── ...
├── pages/
│   ├── Home.jsx                ← Dynamic hero images & content
│   ├── Menu.jsx                ← Dynamic products from client config
│   ├── About.jsx               ← Dynamic story & images
│   ├── Contact.jsx             ← Dynamic contact info
│   └── Cart.jsx                ← Dynamic messenger link
├── App.jsx                     ← Client-aware routing
└── main.jsx
```

## How to Add a New Client

1. **Add client to `src/data/clients.js`**:

```
javascript
// Add new client object to the clients export
newclientname: {
  id: 'newclientname',
  name: 'New Client Name',
  logo: '/newclient-logo.png',        // Put image in public folder
  banner: '/newclient-banner.jpg',
  theme: {
    primary: '#HexColor',
    secondary: '#HexColor',
    accent: '#HexColor',
    background: '#HexColor',
    text: '#HexColor'
  },
  categories: [
    { id: 'all', label: 'All' },
    { id: 'category1', label: 'Category 1' },
  ],
  products: [
    {
      id: 1,
      name: 'Product Name',
      description: 'Product description',
      price: 100,
      category: 'category1',
      image: 'https://...'
    },
  ],
  contact: {
    phone: '(+63) 912-345-6789',
    email: 'email@client.com',
    address: 'Client Address',
    mapLink: 'https://goo.gl/maps/...',
    formsubmitEmail: 'formsubmit@email.com',
    storeHours: [
      { day: 'Monday', hours: '10 AM–10 PM', isClosed: false },
    ]
  },
  messengerLink: 'https://www.messenger.com/t/PAGE_ID'
}
```

2. **Update Home.jsx hero section** (if you want custom hero images):
   - Add client-specific content to `clientHeroContent` object in Home.jsx

3. **Update About.jsx** (if you want custom story):
   - Add client-specific content to `clientAboutContent` object in About.jsx

4. **Deploy** - Just push to GitHub and Render will automatically deploy!

## Example Client Data Structure (clients.js)

```javascript
export const clients = {
  hometownbrew: {
    id: 'hometownbrew',
    name: 'Hometown Brew',
    logo: '/hblogo.jpg',
    theme: {
      primary: '#4A2C2A',
      secondary: '#8B4513',
      accent: '#D4A574',
      background: '#FFF8F0',
      text: '#2D1810'
    },
    products: [...],
    contact: {...},
    messengerLink: 'https://www.messenger.com/t/61560806385216'
  },
  
  milkteashop: {
    id: 'milkteashop',
    name: 'Milk Tea Shop',
    logo: '/milktea-logo.png',
  }
}
```

## Using Client Data in Components

```
javascript
import { useClient } from '../context/ClientContext'

function MyComponent() {
  const { client } = useClient()
  
  // Access client-specific data
  const businessName = client?.name
  const logo = client?.logo
  const products = client?.products
  const messengerLink = client?.messengerLink
}
```

## Deploy to Render (Once!)

### Prerequisites
- GitHub account
- Render account

### Steps

1. **Push your code to GitHub**:
   
```
bash
   git add .
   git commit -m "Multi-client support"
   git push origin main
   
```

2. **Create Render Account**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

3. **Create New Static Site**:
   - Click "New +" → "Static Site"
   - Select your GitHub repository
   - Configure:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`

4. **Deploy**:
   - Click "Create Static Site"
   - Wait for deployment to complete
   - Get your URL (e.g., `your-site.onrender.com`)

5. **Access Your Sites**:
   - `your-site.onrender.com/hometownbrew` → Hometown Brew
   - `your-site.onrender.com/milkteashop` → Milk Tea Shop
   - `your-site.onrender.com/projectbrew` → Project Brew

### Adding Custom Domains (Optional)
- Go to your site settings → "Custom Domains"
- Add your domain
- Update DNS records as instructed

## How It Works

Once deployed:
- Client ID is extracted from URL path (e.g., `/projectbrew`)
- Components automatically load client-specific data from:
  - `clients.js` for products, contact info, theme
  - `Home.jsx` for hero images
  - `About.jsx` for story content

To add a new client:
1. Edit `src/data/clients.js` locally
2. Optionally update Home.jsx and About.jsx with custom content
3. Push to GitHub
4. Render automatically redeploys!
5. New client is live at `your-site.com/newclientname`

## Dynamic Theming

Client themes are applied as CSS variables automatically:

```
css
/* Components can use these CSS variables */
.component {
  background-color: var(--client-background);
  color: var(--client-text);
}

.button {
  background-color: var(--client-primary);
}
```

## Migration from Single Client

If you have an existing single-client website:

1. Move your hardcoded data to `src/data/clients.js`
2. Use the default client key (e.g., `hometownbrew`)
3. Components will automatically use client data from context
4. Test at `/yourclientid` route

## Troubleshooting

**Page not found or blank**:
- Make sure `_redirects` file exists in `public/` folder
- Verify all client IDs are added to the clients.js export
- Trigger a manual redeploy on Render

**Products not showing**:
- Verify products array is in client configuration
- Check product category matches category ID

**Messenger link not working**:
- Ensure messengerLink is a valid Facebook Messenger URL
- Test the link format: `https://www.messenger.com/t/PAGE_ID`

**Changes not showing on Render**:
- Make sure you've pushed changes to GitHub
- Check Render deployment logs for build errors
- Trigger a manual redeploy if needed
