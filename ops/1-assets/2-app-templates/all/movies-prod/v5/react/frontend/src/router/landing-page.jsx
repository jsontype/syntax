import { lazy } from "react";
// layout
import FrontendLayout from "../layouts/FrontendLayout";
import BlankLayout from "../layouts/BlankLayout";

// pages
const OTTPage = lazy(() => import("../views/MainPages/OTTPage"));

// tv-shows pages
const TvShowsList = lazy(() => import("../views/MainPages/TvShowsPage"));
const TvShowsDetail = lazy(() => import("../views/TvShows/DetailPage"));
const LatestEpisodes = lazy(() => import("../views/TvShows/EpisodePage"));

// movies pages
const MoviePage = lazy(() => import("../views/MainPages/MoviesPage"));
const MovieDetail = lazy(() => import("../views/Movies/DetailPage"));

// videos pages
const VideoList = lazy(() => import("../views/MainPages/VideosPage"));

// genre pages
const Playlist = lazy(() => import("../views/Playlist"));
const GenresPage = lazy(() => import("../views/GenresPage"));

//tag pages
const TagsPage = lazy(() => import("../views/TagsPage"));

// cast pages
const CastList = lazy(() => import("../views/Cast/ListPage"));
const DetailPage = lazy(() => import("../views/Cast/DetailPage"));
const CastViewAll = lazy(() => import("../views/Cast/ViewAll"));

// blog pages
const BlogList = lazy(() => import("../views/BlogPages/ListPage"));
const BlogDetail = lazy(() => import("../views/BlogPages/DetailPage"));
const BlogGrid = lazy(() => import("../views/BlogPages/GridList"));
const Blogtemplate = lazy(() => import("../views/BlogPages/Blogtemplate"));
const BlogSingle = lazy(() => import("../views/BlogPages/BlogSingle"));
const SidebarList = lazy(() => import("../views/BlogPages/SidebarListPage"));

// extra pages
const AboutPage = lazy(() => import("../views/ExtraPages/AboutPage"));
const ContactPage = lazy(() => import("../views/ExtraPages/ContactPage"));
const FAQPage = lazy(() => import("../views/ExtraPages/FAQPage"));
const PrivacyPolicy = lazy(() => import("../views/ExtraPages/PrivacyPolicy"));
const TermsofUse = lazy(() => import("../views/ExtraPages/TermsofUse"));
const PricingPage = lazy(() => import("../views/PricingPage"));
const ErrorPage1 = lazy(() => import("../views/ExtraPages/ErrorPage1"));
const ErrorPage2 = lazy(() => import("../views/ExtraPages/ErrorPage2"));

//login pages
const LoginPage = lazy(() => import("../views/AuthPages/LoginPage"));
const SignUpPage = lazy(() => import("../views/AuthPages/SignUpPage"));
const LostPassword = lazy(() => import("../views/AuthPages/LostPassword"));

// merchandise pages
const IndexPage = lazy(() => import("../views/MerchandisePages/IndexPage"));
const ShopCategoryPage = lazy(() =>
  import("../views/MerchandisePages/ShopCategoryPage")
);
const CartPage = lazy(() => import("../views/MerchandisePages/CartPage"));
const CheckOutPage = lazy(() =>
  import("../views/MerchandisePages/CheckoutPage")
);
const WishlistPage = lazy(() =>
  import("../views/MerchandisePages/WishlistPage")
);
const TrackOrder = lazy(() => import("../views/MerchandisePages/TrackOrder"));
const MyAccount = lazy(() => import("../views/MerchandisePages/my-account"));

// view all page
const ViewAll = lazy(() => import("../views/ViewAll"));
const CommingSoonPage = lazy(() =>
  import("../views/ExtraPages/CommingSoonPage")
);
const HomePage = lazy(() => import("../views/MainPages/IndexPage"));
const RestrictedPage = lazy(() => import("../views/Movies/RestictedPage"));
const RelatedMerchandisePage = lazy(() =>
  import("../views/Movies/RelatedMerchandiesPage")
);
const VideoDetail = lazy(() => import("../views/VideosPage/DetailPage"));
const ProductDetail = lazy(() =>
  import("../views/MerchandisePages/ProductDetailPage")
);
const WatchlistDetail = lazy(() => import("../views/WatchlistDetail"));
const AllGenres = lazy(() => import("../views/AllGenres"));
const AllProduct = lazy(() => import("../views/MerchandisePages/AllProduct"));

export const LandingpageRouter = [
  {
    path: "/",
    element: <FrontendLayout HeaderMega="true" FooterCompact="true" />,
    children: [
      {
        path: "",
        element: <OTTPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviePage />,
      },
      {
        path: "/movies-detail",
        element: <MovieDetail />,
      },
      {
        path: "/tv-shows",
        element: <TvShowsList />,
      },
      {
        path: "/shows-details",
        element: <TvShowsDetail />,
      },
      {
        path: "/episodes",
        element: <LatestEpisodes />,
      },
      {
        path: "/videos",
        element: <VideoList />,
      },
      {
        path: "/videos-detail",
        element: <VideoDetail />,
      },
      {
        path: "/restricted-content",
        element: <RestrictedPage />,
      },
      {
        path: "/related-merchandise",
        element: <RelatedMerchandisePage />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/watchlist-detail",
        element: <WatchlistDetail />,
      },
      {
        path: "/geners",
        element: <GenresPage />,
      },
      {
        path: "/all-genres",
        element: <AllGenres />,
      },
      {
        path: "/tags",
        element: <TagsPage />,
      },
      {
        path: "/cast",
        element: <CastList />,
      },
      {
        path: "/cast-detail",
        element: <DetailPage />,
      },
      {
        path: "/cast-view-all",
        element: <CastViewAll />,
      },
      {
        path: "/blogs",
        element: <BlogList title="blogs.blog_listing" />,
      },
      {
        path: "/blogs-tag",
        element: <BlogList title="blogs.comedy" />,
      },
      {
        path: "/blogs-category",
        element: <BlogList title="blogs.drama" />,
      },
      {
        path: "/blogs-date",
        element: <BlogList title="Day: September 23, 2022" />,
      },
      {
        path: "/blogs-author",
        element: <BlogList title="Author: Goldenmace" />,
      },
      {
        path: "/blogs/:grid",
        element: <BlogGrid />,
      },
      {
        path: "/blogs-sidebar/:position",
        element: <SidebarList />,
      },
      {
        path: "/blogs-detail",
        element: <BlogDetail />,
      },
      {
        path: "/blog-template",
        element: <Blogtemplate />,
      },
      {
        path: "/blog-single/:type",
        element: <BlogSingle />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-use",
        element: <TermsofUse />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/view-all",
        element: <ViewAll />,
      },
      {
        path: "/all-products",
        element: <AllProduct />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/account",
        element: <MyAccount />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <FrontendLayout HeaderMerchandise="true" FooterMerchandise="true" />
    ),
    children: [
      {
        path: "/merchandise-store",
        element: <IndexPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <FrontendLayout HeaderMerchandise="true" FooterCompact="true" />
    ),
    children: [
      {
        path: "/shop",
        element: <ShopCategoryPage />,
      },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "/coming-soon",
        element: <CommingSoonPage />,
      },
      {
        path: "/error-page-one",
        element: <ErrorPage1 />,
      },
      {
        path: "/error-page-two",
        element: <ErrorPage2 />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "/lost-password",
        element: <LostPassword />,
      },
    ],
  },
];
