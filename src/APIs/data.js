async function loadMoreRestaurants(lat, lng) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&offset=0&limit=100&collection=83667`
    );
    const res = await data.json();
    return res;
  } catch {
    console.log("error");
  }
}

// const axios = require("axios");

const url = "https://www.swiggy.com/dapi/restaurants/list/v5"; // Example endpoint; verify or adjust if needed

const headers = new Headers({
  "Content-Type": "application/json",
  "x-csrf-token": "xTyUvYKNRFkQ-GXL2RqTfOdbLcCaowPcc0AoR_B8",
  // Add any other necessary headers here
});

async function fetchRestaurants(lat, lng, nextOffset = "") {
  const payload = {
    filters: {},
    lat: 31.322239219689113,
    lng: 75.57277113013306,
    nextOffset: "COVCELQ4KICAtrKXn6fRTzCnEzgC",
    page_type: "DESKTOP_WEB_LISTING",
    seoParams: {
      seoUrl: "https://www.swiggy.com/",
      pageType: "FOOD_HOMEPAGE",
      apiName: "FoodHomePage",
    },
    apiName: "FoodHomePage",
    pageType: "FOOD_HOMEPAGE",
    seoUrl: "https://www.swiggy.com/",
    widgetOffset: {
      NewListingView_category_bar_chicletranking_TwoRows: "",
      NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
      Restaurant_Group_WebView_SEO_PB_Theme: "",
      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "25",
      inlineFacetFilter: "",
      restaurantCountWidget: "",
    },
    _csrf: "xTyUvYKNRFkQ-GXL2RqTfOdbLcCaowPcc0AoR_B8",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Process the data as needed

    // Check if there's a nextOffset for the next page
    if (data && data.data && data.data.nextOffset) {
      // Call the function recursively with the new nextOffset
      await fetchRestaurants(lat, lng, data.data.nextOffset);
    } else {
      console.log("No more data to fetch.");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

// Initial call to fetch the first page of results
fetchRestaurants(31.322239219689113, 75.57277113013306);

export default loadMoreRestaurants;
