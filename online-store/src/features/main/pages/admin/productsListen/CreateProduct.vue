<template>
  <div class="productOption">
    <div class="createProduct">
      <form @submit.prevent="submitForm">
        <label class="text" for="productName">Имя товара:</label>
        <input v-model="product.name" type="text" id="productName" required>

        <label class="text" for="category">Категория:</label>
        <input v-model="product.category" type="text" id="category" required>

        <label class="text" for="description">Описание:</label>
        <input v-model="product.description" id="description" required>

        <label class="text" for="price">Цена:</label>
        <input v-model="product.price" type="text" id="price" required>

        <div>
          <label class="text" for="image">Изображение:</label>
          <input class="text" type="file" id="image" accept="image/*" @change="handleFileChange">

          <div v-if="thumbnail">
            <img :src="thumbnail" alt="Product Image" class="image-preview">
          </div>
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCreateProducts } from "@/features/main/api/useCreateProduct";
import { generateThumbnail } from "@/features/main/components/Image";

const createProduct = useCreateProducts({ config: {} });

const product = ref({
  name: "",
  category: "",
  description: "",
  price: "",
});
const imageFile = ref(null); // Храним файл отдельно
const thumbnail = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  console.log("Выбранный файл:", file);
  if (file) {
    imageFile.value = file; // Сохраняем сам файл

    generateThumbnail(file, thumbnail); // Создаём превью
  }
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append("name", product.value.name);
  formData.append("description", product.value.description);
  formData.append("category", product.value.category);
  formData.append("price", product.value.price);

  if (imageFile.value) {
    formData.append("image", imageFile.value); // Передаём сам файл
  }

  try {
    await createProduct.mutate(formData);

    // Очищаем форму
    product.value = { name: "", category: "", description: "", price: "" };
    imageFile.value = null;
    thumbnail.value = null;
  } catch (error) {
    console.error("Ошибка при отправке формы:", error);
  }
};
</script>

<style scoped>

.createProduct{
  position:absolute;
  top: 110px;
  background-color: #6443a4;
  border-radius: 15px;
  padding: 30px 64px;
}

.productOption{
  width: 100%;
  display: flex;
  justify-content: center;
}

.text{
  color: white;
}
.product-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

.image-preview {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submitted-data {
  margin-top: 20px;
}

.submitted-data img {
  max-width: 100%;
  height: auto;
}
</style>
