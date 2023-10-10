import os

dir_name = "./"
file_name = "ghs__product__"
dir_list = os.listdir(dir_name)
i = 0
while i<len(dir_list):
    file = str(dir_name+dir_list[i])
    i+=1
    if file == "./rename.py":
        continue
    os.rename(file,file_name+str(i)+".png")

print(dir_list)
print("\n All File Has Renamed Successfully !")
