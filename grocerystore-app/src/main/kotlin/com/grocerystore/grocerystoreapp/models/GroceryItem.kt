package com.grocerystore.grocerystoreapp.models



data class GroceryItem(val name: String,
                       val description: String,
                       val additionalInformation: String?,
                       val component: String,
                       val images: List<String>? = null) {}