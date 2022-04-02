
import Volume, { VolumeVersion } from './volume';
import Archive from './archive';
import { Windows2015Volume } from './win/volume';
import { ReadAllRecords, RecordType } from './win/record';
import { Reader } from './reader';


async function extractVolume() {
    // let fileName = "samples/2006-09-17a_optus_win2k_en.tib";
    console.log(Windows2015Volume)
    // Volume.AddType(VolumeVersion.Windows, Windows2015Volume.OpenImpl);
    // let fileName = "samples/2018-04-04_lenovo_ideapad320_neu_win10home.tib";
    // let fileName = "sample_tib/c_intel_full_b1_s1_v1.tib";
    let fileName = "sample_tib/c_intel_fullcompression_full_b1_s1_v1.tib";
    // let fileName = "sample_tib/c_intel_fullcompression_full_b2_s1_v1.tib";

    let volume = await  Volume.Open(fileName);
    // await volume.readAll("tmp");

    let reader = volume.reader.slice();

    reader.seek(volume.startOffset());

    // TODO: We will need to extract this for the sake of being able to do random access

    let recs = await ReadAllRecords(reader);

    console.log(`${fileName}: ${recs.length} records found.`)

    for (let rec of recs) {
        console.log(`  record type ${rec.type}: end-start ${rec.end-rec.start} bytes`)
        if (rec.type == RecordType.Listing)
        {
            for (let file of rec.files) {
                console.log(`   metaOffset ${file.metaOffset}, fileSize ${file.fileSize}, ${file.fileSize2} bytes, ${file.path}`)
            }
        }
        if (rec.type == RecordType.RecordIndex)
        {
            console.log(`   RecordIndex totalSize ${rec.totalSize}`)
            for (let handle of rec.handles) {
                console.log(`     handle hash ${handle.hash.toString('hex')}, recordOffset ${handle.recordOffset}, startOffset ${handle.startOffset}`)
            }
        }
        if (rec.type == RecordType.FirstFileMetaRecord)
        {
            console.log(`   FirstFileMetaRecord`)
        }
        if (rec.type == RecordType.FileMetaA)
        {
            console.log(`   FileMetaA`)
        }
        if (rec.type == RecordType.FileMetaB)
        {
            console.log(`   FileMetaB`)
        }
        if (rec.type == RecordType.FileMetaC)
        {
            console.log(`   FileMetaC`)
        }
        if (rec.type == RecordType.Blob)
        {
            console.log(`   blob ${rec.data.length} bytes of data`)
        }
    }
    
    await reader.close();

    await volume.close();
    console.log("done");
}


async function extractArchive() {
    console.log("Hello")

    // Volume.AddType(VolumeVersion.Windows, Windows2015Volume.OpenImpl);

    let fileName = "samples/2018-04-04_lenovo_ideapad320_neu_win10home.tib";

    let response = await Archive.Open(fileName);

    await response.close();
    console.log("done");
}

extractVolume()
// extractArchive()
