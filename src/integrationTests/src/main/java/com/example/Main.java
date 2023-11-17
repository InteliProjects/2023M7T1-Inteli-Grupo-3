package com.example;

import static org.junit.Assert.*;
import java.io.File;
import java.time.Duration;
import java.util.Scanner;
import org.junit.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static Scanner input = new Scanner(System.in);
    public static WebDriver driver;
    public static String name;
    public static String surname;
    public static String address;
    public static String zipCode;
    public static String district;
    public static String state;
    public static String email;
    public static String password;
    public static String phone;
    public static String creditCardName;
    public static String creditCardNumber;
    public static String expirationDate;
    public static String securityCode;

    private static WebDriver startDriver(String page) {
        String path = Main.class.getProtectionDomain().getCodeSource().getLocation().getPath();
        File jarFile = new File(path);
        String jarDir = jarFile.getParentFile().getAbsolutePath();

        System.setProperty("webdriver.chrome.driver",
                jarDir + "\\selenium\\chromedriver.exe");
        //System.setProperty("webdriver.chrome.driver",
        //        "C:\\Users\\jonas\\Desktop\\projectTest\\demo\\selenium\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/" + page);
        return driver;
    }

    public static WebDriver login(boolean continueLogged) {

        driver = startDriver("login");

        WebElement emailInput = driver.findElement(By.id("email"));
        WebElement passwordInput = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/button"));

        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        loginButton.click();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));

        try {
            driver.findElement(By.xpath("/html/body/div[1]/div[1]/a[5]"));
            System.out.println("Login feito com sucesso!\n");
        } catch (Exception e) {
            System.out.println("Login negado: email e/ou senha incorreto(s).\n");
        } finally {
            if (!continueLogged) {
                driver.quit();
                prepareTest();
            }
        }

        return driver;
    }

    public static void register() {

        driver = startDriver("register");

        WebElement nameInput = driver.findElement(By.id("name"));
        WebElement phoneInput = driver.findElement(By.id("phone"));
        WebElement emailInput = driver.findElement(By.id("email"));
        WebElement passwordInput = driver.findElement(By.id("password"));
        WebElement registerButton = driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/button"));

        nameInput.sendKeys(name);
        phoneInput.sendKeys(phone);
        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        registerButton.click();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));

        try {
            driver.findElement(By.xpath("/html/body/div[1]/div[2]/p"));
            System.out.println("Cadastro criado com sucesso!\n");
        } catch (Exception e) {
            System.out.println("Cadastro negado: dados inválidos\n");
        } finally {
            driver.quit();
            prepareTest();
        }
    }

    public static void addProduct() {
        WebElement productButton = driver.findElement(By.xpath("/html/body/div[2]/a[1]"));
        productButton.click();

        WebElement addOrRemoveButton = driver.findElement(By.xpath("/html/body/div[2]/div[2]/button"));
        addOrRemoveButton.click();

        String actual = addOrRemoveButton.getText();

        try {
            assertEquals("Remover", actual);
            System.out.println("Produto adicionado na sacola com sucesso!\n");
        } catch (Exception e) {
            // TODO: handle exception
        } finally {
            driver.quit();
        }
    }

    public static void getCredentials(int option) {
        if (option != 1) {
            System.out.print("\n-Dados de login-\n\n" +
                    "Email: ");
            email = input.nextLine();
            System.out.print("Senha: ");
            password = input.nextLine();
            System.out.println("\n");
        } else {
            System.out.print("\n-Dados de cadastro-\n\n" +
                    "Nome: ");
            name = input.nextLine();
            System.out.print("Telefone (0-9): ");
            phone = input.nextLine();
            System.out.print("Email: ");
            email = input.nextLine();
            System.out.print("Senha: ");
            password = input.nextLine();
            System.out.println("\n");
        }

        if (option == 4) {
            System.out.print("-Dados de compra de produto- \n\n" +
                    "Nome: ");
            name = input.nextLine();
            System.out.print("Sobrenome: ");
            surname = input.nextLine();
            System.out.print("Endereço: ");
            address = input.nextLine();
            System.out.print("CEP: ");
            zipCode = input.nextLine();
            System.out.print("Bairro: ");
            district = input.nextLine();
            System.out.print("Cidade: ");
            state = input.nextLine();
            System.out.print("Telefone: ");
            phone = input.nextLine();
            System.out.print("Nome impresso no cartão de crédito: ");
            creditCardName = input.nextLine();
            System.out.print("Número do cartão de crédito: ");
            creditCardNumber = input.nextLine();
            System.out.print("Data de expiração: ");
            expirationDate = input.nextLine();
            System.out.print("Código de segurança: ");
            securityCode = input.nextLine();
            System.out.println();
        }

    }

    public static void purchase() {

        driver.get("http://localhost:3000/bag");

        WebElement finishRequestButton = driver.findElement(By.xpath("/html/body/div[2]/div[2]/button"));
        finishRequestButton.click();

        WebElement firstNameInput = driver.findElement(By.id("first-name"));
        WebElement surnameInput = driver.findElement(By.id("last-name"));
        WebElement addressInput = driver.findElement(By.id("address"));
        WebElement zipCodeInput = driver.findElement(By.id("zip-code"));
        WebElement districtInput = driver.findElement(By.id("neighborhood"));
        WebElement stateInput = driver.findElement(By.id("headlessui-combobox-input-:r0:"));
        WebElement emailInput = driver.findElement(By.id("email"));
        WebElement phoneInput = driver.findElement(By.id("phone"));
        WebElement continueButton = driver.findElement(By.xpath("/html/body/div[2]/div[1]/div[3]/button"));

        firstNameInput.sendKeys(name);
        surnameInput.sendKeys(surname);
        addressInput.sendKeys(address);
        zipCodeInput.sendKeys(zipCode);
        districtInput.sendKeys(zipCode);
        stateInput.sendKeys(state);
        emailInput.sendKeys(email);
        phoneInput.sendKeys(phone);
        continueButton.click();

        WebElement creditCardNameInput = driver.findElement(By.id("card-owner-full-name"));
        WebElement creditCardNumberInput = driver.findElement(By.id("card-number"));
        WebElement expeditionDateInput = driver.findElement(By.id("card-expiration-date"));
        WebElement securityCodeInput = driver.findElement(By.id("cvv"));
        WebElement finishPurchaseButton = driver.findElement(By.xpath("/html/body/div[2]/div[1]/div[2]/button"));

        creditCardNameInput.sendKeys(creditCardName);
        creditCardNumberInput.sendKeys(creditCardNumber);
        expeditionDateInput.sendKeys(expirationDate);
        securityCodeInput.sendKeys(securityCode);
        finishPurchaseButton.click();

        try {
            driver.findElement(By.xpath("html/body/div[2]/div[1]/div/h1"));
            System.out.println("Compra realizada com sucesso!\n");
        } catch (Exception e) {
            System.out.println("Compra negada: dados inválidos\n");
        } finally {
            driver.quit();
            prepareTest();
        }
        /// html/body/div[2]/div[1]/div/h1: Pedido realizado com sucesso!

    }

    public static void prepareTest() {
        System.out.print(
                "Bem vindo a plataforma de testes, selecione uma das opções abaixo:\n\n" +
                        "1 - Cadastro\n" +
                        "2 - Login\n" +
                        "3 - Adicionar Produto\n" +
                        "4 - Comprar produto\n" +
                        "0 - Sair\n\n" +
                        "Opção: ");
        String input = System.console().readLine();
        int option = Integer.parseInt(input);
        selectOption(option);
    }

    public static void selectOption(int option) {
        if (option != 0) {
            getCredentials(option);
        }
        switch (option) {

            case 1:
                register();
                break;
            case 2:
                login(false);
                break;
            case 3:
                login(true);
                addProduct();
                break;
            case 4:
                login(true);
                purchase();
            case 0:
                System.out.println("\nFinalizando...\n");
                System.exit(0);
        }
    }

    public static void main(String[] args) {
        prepareTest();
    }
}