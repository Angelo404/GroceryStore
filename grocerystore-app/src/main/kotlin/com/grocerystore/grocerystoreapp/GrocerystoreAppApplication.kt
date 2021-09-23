package com.grocerystore.grocerystoreapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import java.io.File

@SpringBootApplication
class GrocerystoreAppApplication

fun main(args: Array<String>) {
	runApplication<GrocerystoreAppApplication>(*args)
}
