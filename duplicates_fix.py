import os
import os.path
import time


def listdir_recursive(path: str, arr: list = []) -> list:
    for fname in os.listdir(path):
        fpath = os.path.join(path, fname)
        if os.path.isdir(fpath):
            listdir_recursive(fpath, arr)
        else:
            arr.append(fpath[(len(cwd) + 11):])
    return arr


start = time.time()


cwd = os.getcwd()
innercore_classes_path = os.path.join(cwd, "innercore")
innercore_classes = listdir_recursive(innercore_classes_path)
duplicates = []
android_dir = os.path.join(cwd, "android")


for clazz in innercore_classes:
    if os.path.exists(os.path.join(android_dir, clazz)):
        duplicates.append(clazz)


end = time.time()
print("Finished in " + str(round((end - start) * 100)) + " ms")


if len(duplicates) > 0:
    print("Found " + str(len(duplicates)) + " duplicate classes")
    if input("Y - delete them from innercore classes, otherwise list them >>> ").lower() == "y":
        [ os.remove(os.path.join(cwd, "innercore", duplicate)) for duplicate in duplicates ]
        end_remove = time.time()
        print("Deleted in " + str(round((end_remove - end) * 100)) + " ms")
        print("Complete!")
    else:
        [ print(duplicate) for duplicate in duplicates ]
else:
    print("No duplicates found")
input()