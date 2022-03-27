import { memo } from 'react';
import ScrollArea from "./ScrollArea";
import EventItem from "./EventItem";
import ListingsFilter from "./ListingsFilter";
import Skeleton from './misc/Skeleton';
import LoginRequiredEvents from "./LoginRequiredEvents";

export default memo(function Listings(props) {
  const { listings, loading, pendingListings, filters, setFilters, purchase, pauseHover, setPauseHover, auth, collectionInfo } = props;

  return (
    <div className="flex flex-col">
      <div className="px-8 py-4 bg-white border border-gray-l-04 shadow-md font-semibold text-lg rounded-lg mb-4 flex items-center justify-between dark:bg-gray-d-06 dark:text-white dark:border-gray-d-05">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <span>Listings</span>
            <div className="flex items-center justify-center h-3 w-3 ml-4">
              <div className={`${pauseHover ? 'bg-yellow-l-01' : 'bg-green-l-01'} absolute w-2 h-2 rounded-full`}></div>
              <div className={`${pauseHover ? null : 'bg-green-l-01'} absolute w-3 h-3 rounded-full animate-ping opacity-60`}></div>
            </div>
            {
              pauseHover && <span className="ml-4 text-xs text-blackDark">Paused ({pendingListings.length})</span>
            }
          </div>
        </div>
        <ListingsFilter onChange={(key, value) => setFilters(p => ({ ...p, [key]: value }))} filters={filters}>
          {
            Object.values(filters).some(v => !!v)
              ? <button className="bg-blue-l-01 text-white text-sm h-full px-4 rounded-md font-semibold dark:bg-blue-d-01">Filters ({Object.values(filters).filter(v => !!v).length})</button>
              : <button className="border border-black text-sm h-full px-4 rounded-md font-semibold dark:border-white">Filters</button>
          }
        </ListingsFilter>
      </div>
      {
        auth?.user?.token
          ? (
            loading
              ? <Skeleton height={60} width={'100%'} count={4} borderRadius={12} />
              : (
                <ScrollArea setPauseHover={setPauseHover}>
                  {
                    listings.filter(e => !filters.maxPrice || e.price <= filters.maxPrice).slice(0, 40).map(e => {
                      return (
                        <EventItem key={e.eventId} event={e} onPurchase={purchase} type="listing" active={e.active} collectionImage={collectionInfo?.image || ''}/>
                      )
                    })
                  } 
                </ScrollArea>
              )
          )
          : (
            <LoginRequiredEvents />
          )
      }
    </div>
  )
})
