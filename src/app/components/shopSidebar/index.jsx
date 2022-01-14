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
