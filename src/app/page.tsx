import Accordianitms from "@/components/Accordianitms";
import Card from "@/components/Card";
import Options from "@/components/Options";
import axios from "axios";

const baseUrl =
  "http://ec2-65-1-113-130.ap-south-1.compute.amazonaws.com:4002/api/v1/";
const getOneBusinessUrl = (id: string) => baseUrl + `business/${id}`;

async function getBusiness(id: string) {
  try {
    const res = await axios.get(getOneBusinessUrl(id));
    return res.data as BusinessRes;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;

  // const [res, setres] = useState<BusinessRes | undefined>();

  const res = await getBusiness(id);
  // useEffect(() => {

  //   return () => {};
  // }, [id]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <div>
        {res ? (
          <>
          
            <Card fill="#fff" textColour="#000" data={res.data} />
            <Options data={res.data} />
            <Accordianitms />
           
          </>
        ) : (
          "Not Found"
        )}
      </div>
    </main>
  );
}
