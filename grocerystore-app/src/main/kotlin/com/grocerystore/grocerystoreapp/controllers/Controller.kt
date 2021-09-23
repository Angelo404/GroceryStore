package com.grocerystore.grocerystoreapp.controllers

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.grocerystore.grocerystoreapp.models.GroceryItem
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import java.util.*

@Configuration
@EnableConfigurationProperties
@ConfigurationProperties
// THIS SHOULD BE MOVED TO A DEDICATED CONFIG FILE/CLASS
class controllerConfig() {

    fun loadData(fileName: String): String
            = this::class.java.classLoader.getResource(fileName).readText()
}

@RestController
@CrossOrigin
class Controller {

    @GetMapping("/hello/{searchString}")
    @CrossOrigin
    fun helloKotlin(@PathVariable searchString: String?): List<GroceryItem>? {

        var itemsSelected: List<GroceryItem>? = null

        val mapper = jacksonObjectMapper()
        // THE NAME OF THE FILE SHOULD BE LOADED FROM A CONFIG DIR. (OR JUST HAVE A DB WITH ALL GROCERY ITEMS.
        val x = mapper.readValue<List<GroceryItem>>(controllerConfig().loadData("grocerylist.json"))

        if (searchString != null) {
            itemsSelected = x.filter { it.name.lowercase(Locale.getDefault()).indexOf(searchString.lowercase(Locale.getDefault())) >= 0 }
        }
        return itemsSelected
    }
}