<template>
    <div class="flex justify-around my-10">
        <div>
            <div class="my-2 flex flex-col">
                <label for="email">ADRESSE EMAIL :</label>
                <input  type="email" name="email" placeholder="Entrez votre adresse email ...">
            </div>
            <div class="my-2 flex flex-col">
                <label for="mot-de-passe">MOT DE PASSE :</label>
                <input type="password" name="mot-de-passe" placeholder="Entrez votre mot de passe ...">
            </div>
        </div>
        <hr class="border-black border-l h-auto">
        <div>
            <button class="flex border border-black place-items-center rounded-md p-2 my-2 w-80">
                <span class="font-MerriweatherSans font-thin px-8">Se connecter via Google</span>
                <img class="w-8" src="/public/Google.png" alt="Logo de Google">
            </button>
            <button class="flex border border-black place-items-center rounded-md p-2 my-2 w-80">
                <span class="font-MerriweatherSans font-thin px-8">Se connecter via Facebook</span>
                <img class="w-8" src="/public/facebook.png" alt="Logo de Facebook">
            </button>
        </div>
    </div>
</template>