import tkinter as tk
from tkinter.constants import RIGHT, NW
from random import randint
from time import sleep

TIME = 9

def update_labels():
    while True:
        n1 = randint(999, 9999)
        n2 = randint(1, 999)
        while n2 >= n1:
            n2 = randint(99, 9999)

        res.set('?')
        n1v.set(n1)
        n2v.set(n2)
        root.update()
        sleep(TIME)
        res.set(str(n1 - n2))
        root.update()
        sleep(3)

root = tk.Tk()
n1v = tk.StringVar()
n2v = tk.StringVar()
res = tk.StringVar()
root.geometry("130x120")
message1 = tk.Label(root, textvariable=n1v, anchor="e", width=10, )
message1.grid(row=0, column=0)
message2 = tk.Label(root, textvariable=n2v, anchor="e", width=10, justify=RIGHT)
message2.grid(row=1, column=0)
line = tk.Label(root, text='------------', anchor="e", width=10, )
line.grid(row=2, column=0)
result = tk.Label(root, textvariable=res, anchor="e", width=10, )
result.grid(row=3, column=0)

update_labels()
root.mainloop()