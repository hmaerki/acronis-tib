
## Acronis
https://www.garykessler.net/library/file_sigs.html

## Typescript

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html


## Gulp
https://gulpjs.com/docs/en/getting-started/quick-start/

https://github.com/dennisss/chess

## Visual Studio Code
https://code.visualstudio.com/docs/typescript/typescript-tutorial


## How to run
npm install -g gulp typescript ts-node
npm install
tsc -p tsconfig.json

ts-node src/test_hans.ts


## samples/2018-04-04_lenovo_ideapad320_neu_win10home.tib

### Hexdump

```bash
$ xxd -l 120 -c 8 samples/2018-04-04_lenovo_ideapad320_neu_win10home.tib 
00000000: ce24 b9a2 2000 0000  .$.. ...
00000008: 4759 1226 3953 1d67  GY.&9S.g
00000010: eb88 d029 0100 0000  ...)....
00000018: e306 3c95 2000 0000  ..<. ...
00000020: ffff ffff ffff ffff  ........
00000028: 78da edd7 5d88 5465  x...].Te
00000030: 1800 e06f 676d d5ad  ...ogm..
00000038: 7536 24fb 9338 1756  u6$..8.V
00000040: 2625 d112 d88f e546  &%.....F
00000048: 6d04 b9ca fa83 7821  m.....x!
00000050: 0db9 27b7 7037 66ce  ..'.p7f.
00000058: 1a92 2bab 1351 0e48  ..+..Q.H
00000060: 175d 7499 3711 e24d  .]t.7..M
00000068: 2099 58ba 9b91 152d   .X....-
00000070: 6817 4176 d18f 115b  h.Av...[
```

Header Length = 32 bytes

### Cut the first 40 bytes off: `78da` looks like a zlib header (see https://en.wikipedia.org/wiki/List_of_file_signatures).

dd \
  ibs=40 \
  skip=1 \
  if=samples/2018-04-04_lenovo_ideapad320_neu_win10home.tib \
  of=samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip

$ unzip samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip 
Archive:  samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip
  End-of-central-directory signature not found.  Either this file is not
  a zipfile, or it constitutes one disk of a multi-part archive.  In the
  latter case the central directory and zipfile comment will be found on
  the last disk(s) of this archive.
unzip:  cannot find zipfile directory in one of samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip or
        samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip.zip, and cannot find samples/2018-04-04_lenovo_ideapad320_neu_win10home.zip.ZIP, period.

## sample_tib/c_intel_full_b1_s1_v1.tib

Window, archive of files, normal compression

### Hexdump

```bash
$ xxd -l 120 -c 8 sample_tib/c_intel_full_b1_s1_v1.tib
00000000: ce24 b9a2 2000 0000  .$.. ...
00000008: 146d cf0e 185b 97ba  .m...[..
00000010: 757d 9991 0100 0000  u}......
00000018: cd07 e2a6 2000 0000  .... ...
00000020: 6d78 01b3 6300 4105  mx..c.A.
00000028: 0633 067d 0603 0673  .3.}...s
00000030: 2069 04a4 0d81 2c05   i....,.
00000038: 2069 c960 c560 ca60   i.`.`.`
00000040: 0c24 8d80 2aac 184c  .$..*..L
00000048: 8062 060c bc0c 5c0c  .b....\.
00000050: ee0c 6e0c 1140 35ce  ..n..@5.
00000058: 0cf9 0c99 0c79 0cc5  .....y..
00000060: 0c25 0c89 0c39 4098  .%...9@.
00000068: ca50 0414 d700 aad4  .P......
00000070: 03ea d403 d246 40d2  .....F@.
```
