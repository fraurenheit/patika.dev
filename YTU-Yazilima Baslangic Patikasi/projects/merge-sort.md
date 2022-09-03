# PROJE-2 (Merge Sort Projesi)
 ## [16,21,11,8,12,22] -> Merge Sort
- ### Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
### çözüm:
**1)** [16,21,11,8,12,22] dizisini ikiye bölelim.

**2)** [16,21,11] ve [8,12,22] olmak üzere iki dizi oluştu.

**3)** [16,21] - [11] ve [8,12] - [22] olarak tekrar bölelim.

**4)** Verileri teker teker olmak üzere ayıralım: [16]-[21]-[11]-[8]-[12]-[22]

**5)** Birer parçaya ayırdığımız verileri küçükten büyüğe kendi grupları içinde birleştirelim: [16,21]-[11]-[8,12]-[22] => [11,16,21] - [8,12,22]

**6)** Son olarak,iki grup da birleştirilir. [8,11,12,16,21,22]


- ### Big-O gösterimini yazınız.
### cevap: 
O(nLogn) 'dir.

www.patika.dev