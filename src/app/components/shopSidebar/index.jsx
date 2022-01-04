import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ShopSidebar() {
  return (
    <div class="flex flex-col h-full p-3 w-60 bg-white text-gray-800">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h2>Categories</h2>
        </div>

        <div class="flex-1">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="rounded-sm">
              <FontAwesomeIcon icon="fa-regular fa-campground" />
              <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>

              <span>Backpacks</span>
            </li>
            <li class="rounded-sm">
              <span>Sleeping Gear</span>
            </li>
            <li class="rounded-sm">
              <span>Tents</span>
            </li>

            <li class="rounded-sm">
              <span>Cookware</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
