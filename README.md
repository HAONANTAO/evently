# Evently

Link:https://evently-three-kohl.vercel.app/



#### User Authentication (CRUD) with Clerk:

Enable secure user management through Clerk, ensuring efficient authentication.

#### Events Management (CRUD):

Create, Read, Update, and Delete events, giving users full control over event management.

#### Create Events:

Allow users to easily generate new events, providing details such as title, date, location, and additional information.

#### Read Events:

Provide detailed views of all events, allowing users to explore event specifics like descriptions, schedules, and related information.

#### Update Events:

Empower users to dynamically modify event details, ensuring accuracy and timeliness.

#### Delete Events:

Provide a straightforward process for removing events, enabling effective platform management.
Related Events:

Smartly connect related events and display them on event details pages, enhancing user engagement.

#### Organized Events:

Efficiently organize events, ensuring a structured and user-friendly display, such as showing user-created events on their profiles.

#### Search & Filter:

Empower users with a robust search and filter system, helping them find events that match their preferences easily.

#### New Category:

Allow dynamic categorization for seamless addition of new event categories, keeping the platform adaptable.

#### Checkout and Pay with Stripe:

Enable smooth and secure payment transactions using Stripe, enhancing user experience during checkout.

#### Event Orders:

Provide a comprehensive order management system, offering a clear overview of all event-related transactions.

#### Search Orders:

Offer quick and efficient search functionality for orders, facilitating easy tracking and management.

#### Code Architecture and Reusability:

Ensure a well-structured codebase for easy maintenance and scalability, promoting reusability across the platform.

[![LinkedIn][linkedin-shield]][www.linkedin.com/in/haonan-tao-aaron]

<br />

<p align="center">
  <a href="https://github.com/shaojintian/Best_README_template/">
    <img src="Web.png" alt="Logo" width="1200" height="600">
  </a>


</p>

## Content

- [Basic Develop environment](#Basic Develop environment)
  - [Set Up](#Set Up)
- [Files Catalog Contents](#Files Catalog Contents)
- [How to Use](#How to Use)
- [Deployment](#Deployment)
- [Skills](#Skills)
- [Contributor](#Contributor)
  - [Open Source](#Open Source)
- [Version Control](#Version Control)
- [Author](#Author)
- [External Links](#External Links)

### Basic Develop environment

###### **Set Up Steps**

Clone the repo

```sh
https://github.com/HAONANTAO/evently.git
```

### Files Catalog ContentsFiles Catalog Contents

```
EVENTLY
├── README.md
├── .env.local
├── components.json
├── .gitignore
├── middleware.ts
├── next-env.d.ts
├── package-lock.json
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── LICENSE
├── postcss.confog.mjs
├── node_modules
├── .next
├── app
│  ├── (auth)
│  ├── ├── sign-in
│  ├── ├── ├── [...sign-in]
│  ├── ├── ├── ├── page.tsx

│  ├── ├── sign-up
│  ├── ├── ├── [...sign-up]
│  ├── ├── ├── ├── page.tsx
│  ├── ├── layout.tsx

│  ├── (root)
│  ├── ├── events
│  ├── ├── ├── [id]
│  ├── ├── ├── ├── update
│  ├── ├── ├── ├── ├── page.tsx

│  ├── ├── ├── create
│  ├── ├── ├── ├── page.tsx

│  ├── ├── orders
│  ├── ├── ├── page.tsx
│  ├── ├── profile
│  ├── ├── ├── page.tsx
│  ├── ├── layout.tsx
│  ├── ├── page.tsx

│  ├── api
│  ├── ├── uploadthing
│  ├── ├── ├── core.ts
│  ├── ├── ├── route.ts

│  ├── ├── webhook
│  ├── ├── ├── clerk
│  ├── ├── ├── ├── route.ts

│  ├── ├── ├── stripe
│  ├── ├── ├── ├── route.ts

│  ├── favicon.ico
│  ├── globals.css
│  ├── layout.tsx

├── components
│  ├── reusable
│  ├── ├── dist
│  ├── ├── ├── EventForm.js
│  ├── ├── Card.tsx
│  ├── ├── CategoryFilter.tsx
│  ├── ├── Checkout.tsx
│  ├── ├── CheckoutButton.tsx
│  ├── ├── Collection.tsx
│  ├── ├── DeleteConfirmation.tsx
│  ├── ├── Dropdown.tsx
│  ├── ├── EventFor.rsx
│  ├── ├── FileeUploader.tsx
│  ├── ├── Footer.tsx
│  ├── ├── Header.tsx
│  ├── ├── MobileNav.tsx
│  ├── ├── NavItems.tsx
│  ├── ├── Pagination.tsx
│  ├── ├── Search.tsx

│  ├── ui
│  ├── ├── alert-dialog.tsx
│  ├── ├── button.tsx
│  ├── ├── checkoutbox.tsx
│  ├── ├── form.tsx
│  ├── ├── input.tsx
│  ├── ├── label.tsx
│  ├── ├── select.tsx
│  ├── ├── separator.tsx
│  ├── ├── sheet.tsx
│  ├── ├── textarea.tsx

├── data
│  ├── index.tsx

├── lib
│  ├── actions
│  ├── ├── category.actions.ts
│  ├── ├── event.actions.ts
│  ├── ├── order.action.ts
│  ├── ├── user.actions.ts

│  ├── databse
│  ├── models
│  ├── ├── category.model.ts
│  ├── ├── event.model.ts
│  ├── ├── order.model.ts
│  ├── ├── user.model.ts

│  ├── ├── index.ts
│  ├── uploadthing.ts
│  ├── utils.ts
│  ├── validator.ts



├── public
│  ├── assets
│  ├── ├── icons
│  ├── ├── ├── arrow.svg
│  ├── ├── ├── calendar.svg
│  ├── ├── ├── clock.svg
│  ├── ├── ├── delete.svg
│  ├── ├── ├── dollar.svg
│  ├── ├── ├── edit.svg
│  ├── ├── ├── file-upload.svg
│  ├── ├── ├── link.svg
│  ├── ├── ├── loader.svg
│  ├── ├── ├── location-grey.svg
│  ├── ├── ├── location.svg
│  ├── ├── ├── logo-grey.svg
│  ├── ├── ├── menu.svg
│  ├── ├── ├── search.svg
│  ├── ├── ├── spinner.svg
│  ├── ├── ├── upload.svg

│  ├── ├── images
│  ├── ├── ├── dotted-pattern.png
│  ├── ├── ├── hero.png
│  ├── ├── ├── logo.svg
│  ├── ├── ├── placeholder.png
│  ├── ├── ├── test-2png
│  ├── ├── ├── test.png

├── types
│  ├── index.ts

```

How to Use

```
npm i && npm run dev
```

### Deployment

Vercel (Serverless)

### Skills

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

### Contributor

#### Open Source

Contributing makes the open-source community a great place to learn, inspire and create. Any contribution you make is **very much appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Version Control

git for version control

### Author

HAONANTAO

### External Links

- [https://www.youtube.com/watch?v=zgGhzuBZOQg](#https://members.codewithmosh.com/courses/nextjs-projects-issue-tracker/lectures/49642701)

<!-- links -->
